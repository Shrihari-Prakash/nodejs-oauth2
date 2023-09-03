import { Logger } from "../../../singleton/logger";
const log = Logger.getLogger().child({ from: "user/login" });

import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { body } from "express-validator";

import UserModel, { UserInterface } from "../../../model/mongo/user";
import { errorMessages, statusCodes } from "../../../utils/http-status";
import { ErrorResponse, SuccessResponse } from "../../../utils/response";
import { hasErrors } from "../../../utils/api";
import { Pusher } from "../../../singleton/pusher";
import { PushEvent } from "../../pusher/pusher";
import { PushEventList } from "../../../enum/push-events";
import { sanitizeEmailAddress } from "../../../utils/email";
import UserValidator from "../../../validator/user";

const userValidator = new UserValidator(body);

export const POST_LoginValidator = [
  userValidator.username(false),
  userValidator.email(false),
  userValidator.password(true),
];

const POST_Login = async (req: Request, res: Response) => {
  try {
    if (hasErrors(req, res)) return;
    const { username, email, password } = req.body;
    const select = ["+password"];
    const query: any = {};
    if (email) {
      query.email = sanitizeEmailAddress(email);
    } else {
      query.username = username;
    }
    const user = (await UserModel.findOne(query, select).exec()) as unknown as UserInterface;
    if (!user) return res.status(statusCodes.unauthorized).json(new ErrorResponse(errorMessages.unauthorized));
    if (!user.emailVerified)
      return res.status(statusCodes.resourceNotActive).json(new ErrorResponse(errorMessages.resourceNotActive));
    const isPasswordValid = await bcrypt.compare(password, user.password || "");
    if (!isPasswordValid)
      return res.status(statusCodes.unauthorized).json(new ErrorResponse(errorMessages.unauthorized));
    user.password = undefined;
    req.session.user = user;
    log.debug("Assigned session id %s for user %s", req.session?.id, user._id);
    Pusher.publish(new PushEvent(PushEventList.USER_LOGIN, { user }));
    req.session.save(function (err) {
      if (err) {
        log.error(err);
        return res.status(statusCodes.internalError).json(new ErrorResponse(errorMessages.internalError));
      }
      return res.status(statusCodes.success).json(new SuccessResponse({ userInfo: user }));
    });
  } catch (err) {
    log.error(err);
    return res.status(statusCodes.internalError).json(new ErrorResponse(errorMessages.internalError));
  }
};

export default POST_Login;
