import { Logger } from "../../../singleton/logger";
const log = Logger.getLogger().child({ from: "user/follow" });

import { Request, Response } from "express";

import { Configuration } from "../../../singleton/configuration";
import { errorMessages, statusCodes } from "../../../utils/http-status";
import { ErrorResponse, SuccessResponse } from "../../../utils/response";
import UserModel, { IUser, IUserProjection } from "../../../model/mongo/user";
import FollowModel from "../../../model/mongo/follow";

const GET__UserId = async (req: Request, res: Response) => {
  try {
    const targetId = req.params.userId;
    const sourceId = res.locals.oauth.token.user._id;
    let user = (await UserModel.findOne(
      { _id: targetId },
      IUserProjection
    ).exec()) as unknown as IUser;
    if (Configuration.get("privilege.can-use-follow-apis")) {
      const isFollowing = (await FollowModel.findOne({
        $and: [{ targetId }, { sourceId }, { approved: true }],
      }).exec()) as unknown as IUser;
      user = JSON.parse(JSON.stringify(user));
      user.isFollowing = !!isFollowing;
      if (user.isPrivate && !isFollowing) {
        // @ts-expect-error
        delete user.email;
        // @ts-expect-error
        delete user.phone;
        // @ts-expect-error
        delete user.secondaryEmail;
        // @ts-expect-error
        delete user.secondaryPhone;
      }
    }
    res.status(statusCodes.success).json(new SuccessResponse({ user }));
  } catch (err) {
    log.error(err);
    return res
      .status(statusCodes.internalError)
      .json(new ErrorResponse(errorMessages.internalError));
  }
};

export default GET__UserId;
