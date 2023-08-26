import { Logger } from "../../../singleton/logger";
const log = Logger.getLogger().child({ from: "user/followers" });

import { Request, Response } from "express";

import { errorMessages, statusCodes } from "../../../utils/http-status";
import { ErrorResponse, SuccessResponse } from "../../../utils/response";
import FollowModel from "../../../model/mongo/follow";
import { useFollowersQuery } from "../../../model/query/followers";
import { checkSubscription } from "../../../utils/subscription";
import { attachProfilePicture } from "../../../utils/profile-picture";
import { getPaginationLimit } from "../../../utils/pagination";
import { ScopeManager } from "../../../singleton/scope-manager";
import { getBlockStatus } from "../../../utils/block";
import { canRequestNonFollowerInfo } from "../../../utils/user";

const GET_Followers = async (req: Request, res: Response) => {
  try {
    if (!ScopeManager.isScopeAllowedForSession("user.delegated.follow.read", res)) {
      return;
    }
    let userId = res.locals.oauth.token.user._id;
    const targetId = req.params.userId;
    if (targetId) {
      // The first two parameters reversed because we need to find if the target has blocked the source.
      const isBlocked = await getBlockStatus(targetId, userId, res);
      if (isBlocked) return;
      const nonFollowerInfoAllowed = await canRequestNonFollowerInfo(userId, targetId, null, res);
      if (!nonFollowerInfoAllowed) return;
      userId = targetId;
    }
    const limit = getPaginationLimit(req.query.limit as string);
    const offset = req.query.offset as string;
    const query = useFollowersQuery(userId, limit);
    if (offset) {
      query[0].$match.$and.push({ createdAt: { $lt: new Date(offset) } });
    }
    const records = await FollowModel.aggregate(query).exec();
    for (let i = 0; i < records.length; i++) {
      checkSubscription(records[i].source);
      await attachProfilePicture(records[i].source);
    }
    res.status(statusCodes.success).json(new SuccessResponse({ records }));
  } catch (err) {
    log.error(err);
    return res.status(statusCodes.internalError).json(new ErrorResponse(errorMessages.internalError));
  }
};

export default GET_Followers;
