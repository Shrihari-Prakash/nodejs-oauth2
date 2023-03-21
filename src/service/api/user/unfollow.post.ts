import { Logger } from "../../../singleton/logger";
const log = Logger.getLogger().child({ from: "user/unfollow" });

import { Request, Response } from "express";

import { errorMessages, statusCodes } from "../../../utils/http-status";
import { ErrorResponse, SuccessResponse } from "../../../utils/response";
import FollowModel from "../../../model/mongo/follow";
import { updateFollowCount } from "../../../utils/follow";
import { hasErrors } from "../../../utils/api";

const POST_Unfollow = async (req: Request, res: Response) => {
  try {
    if (hasErrors(req, res)) return;
    const sourceId = res.locals.oauth.token.user._id;
    const targetId = req.body.target;
    if (sourceId === targetId)
      return res.status(statusCodes.clientInputError).json(new ErrorResponse(errorMessages.clientInputError));
    const result = await FollowModel.deleteOne({
      sourceId,
      targetId,
      approved: true,
    });
    if (!result.deletedCount) {
      return res.status(statusCodes.success).json(new SuccessResponse());
    }
    await updateFollowCount(sourceId, targetId, -1);
    res.status(statusCodes.success).json(new SuccessResponse());
  } catch (err) {
    log.error(err);
    return res.status(statusCodes.internalError).json(new ErrorResponse(errorMessages.internalError));
  }
};

export default POST_Unfollow;
