import { Logger } from "../../../../singleton/logger";
const log = Logger.getLogger().child({ from: "client/admin-api/update" });

import { Request, Response } from "express";
import { isValidObjectId } from "mongoose";
import { body } from "express-validator";

import { ScopeManager } from "../../../../singleton/scope-manager";
import { hasErrors } from "../../../../utils/api";
import ClientModel, { clientSchema } from "../../../../model/mongo/client";
import Role from "../../../../enum/role";
import { errorMessages, statusCodes } from "../../../../utils/http-status";
import { ErrorResponse, SuccessResponse } from "../../../../utils/response";
import { Configuration } from "../../../../singleton/configuration";

export const PATCH_UpdateValidator = [
  body("target").exists().isString().isLength({ max: 64 }).custom(isValidObjectId),
  body("id").exists().isString().isLength({ min: 8, max: 30 }).matches(new RegExp(Configuration.get("client.id-validation-regex"), "i")),
  body("grants").optional().isArray().isIn(["client_credentials", "authorization_code", "refresh_token", "password"]),
  body("redirectUris").optional().isArray(),
  body("secret").optional().isString().isLength({ min: 8, max: 256 }),
  body("role").optional().isString().isIn([Role.INTERNAL_CLIENT, Role.EXTERNAL_CLIENT]),
  body("scope").optional().isArray().isIn(Object.keys(ScopeManager.getScopes())),
  body("displayName").optional().isString().isLength({ min: 8, max: 96 }),
];

const PATCH_Update = async (req: Request, res: Response) => {
  try {
    if (hasErrors(req, res)) return;
    const errors = [];
    const target = req.body.target;
    delete req.body.target;
    const client = await ClientModel.findOne({ _id: target });
    if (!client) return res.status(statusCodes.clientInputError).json(new ErrorResponse(errorMessages.invalidTarget));
    const requiredScope = client.role === Role.INTERNAL_CLIENT ? "admin:system:internal-client:write" : "admin:system:external-client:write"
    if (!ScopeManager.isScopeAllowedForSession(requiredScope, res)) {
      return;
    }
    const fields = Object.keys(req.body);
    // Any field name is invalid.
    for (let i = 0; i < fields.length; i++) {
      let field = fields[i];
      if (!Object.keys(clientSchema).includes(field)) {
        errors.push({ msg: "Invalid value", param: field, location: "body" });
      }
    }
    if (errors.length) {
      return res
        .status(statusCodes.unauthorized)
        .json(new ErrorResponse(errorMessages.invalidField, { errors }));
    }
    await ClientModel.updateOne({ _id: target }, req.body);
    log.debug("Client updated successfully.");
    res.status(statusCodes.success).json(new SuccessResponse());
  } catch (err) {
    log.error(err);
    return res.status(statusCodes.internalError).json(new ErrorResponse(errorMessages.internalError));
  }
};

export default PATCH_Update;