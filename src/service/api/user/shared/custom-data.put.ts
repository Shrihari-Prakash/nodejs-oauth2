import { Logger } from "../../../../singleton/logger";
const log = Logger.getLogger().child({ from: "user/common-api/custom-data.put" });

import { body } from "express-validator";
import { Request, Response } from "express";
import { isValidObjectId } from "mongoose";

import UserValidator from "../../../../validator/user";
import { hasErrors } from "../../../../utils/api";
import { ScopeManager } from "../../../../singleton/scope-manager";
import { errorMessages, statusCodes } from "../../../../utils/http-status";
import { ErrorResponse, SuccessResponse } from "../../../../utils/response";
import UserModel from "../../../../model/mongo/user";

const userValidator = new UserValidator(body);

export const PUT_CustomDataValidator = [
  body("target").exists().isString().isLength({ max: 128 }).custom(isValidObjectId),
  userValidator.customData(true),
];

const PUT_CustomData = async (req: Request, res: Response) => {
  if (hasErrors(req, res)) {
    return;
  }
  if (!ScopeManager.isScopeAllowedForSharedSession("<ENTITY>:profile:custom-data:write", res)) {
    return;
  }
  try {
    const target = req.body.target;
    const customData = req.body.customData;
    const serializedCustomData = JSON.stringify(customData); // Prevent noSQL injections.
    await UserModel.updateOne({ _id: target }, { $set: { customData: serializedCustomData } });
    res.status(statusCodes.success).json(new SuccessResponse());
  } catch (err) {
    log.error(err);
    return res.status(statusCodes.internalError).json(new ErrorResponse(errorMessages.internalError));
  }
};

export default PUT_CustomData;
