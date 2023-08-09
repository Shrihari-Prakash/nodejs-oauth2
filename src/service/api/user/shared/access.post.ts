import { Logger } from "../../../../singleton/logger";
const log = Logger.getLogger().child({ from: "user/admin-api/access" });

import { Request, Response } from "express";
import { body } from "express-validator";

import { errorMessages, statusCodes } from "../../../../utils/http-status";
import { ErrorResponse, SuccessResponse } from "../../../../utils/response";
import { hasErrors } from "../../../../utils/api";
import UserModel from "../../../../model/mongo/user";
import { ScopeManager } from "../../../../singleton/scope-manager";
import ClientModel from "../../../../model/mongo/client";

export const POST_AccessValidator = [
  body("targets").exists().isArray(),
  body("targetType").exists().isString().isIn(["user", "client"]),
  body("scope").exists().isArray(),
  body("status").exists().isBoolean(),
];

const POST_Access = async (req: Request, res: Response) => {
  try {
    if (!ScopeManager.isScopeAllowedForSharedSession("user.<ENTITY>.access.write", res)) {
      return;
    }
    if (hasErrors(req, res)) return;
    if (req.body.targets.some((t: string) => typeof t !== "string")) {
      const errors = [
        {
          msg: "Invalid value",
          param: "targets",
          location: "body",
        },
      ];
      return res
        .status(statusCodes.clientInputError)
        .json(new ErrorResponse(errorMessages.clientInputError, { errors }));
    }
    if (
      req.body.scope.some(
        (s: string) =>
          /* 
          Scope validate error conditions:
            1. If a scope value is not string.
            2. If it is not a valid scope from the list of scopes.
            3. If the user requesting the API does not have access to this scope in the first place
          */
          typeof s !== "string" ||
          typeof ScopeManager.getScopes()[s] === "undefined" ||
          !ScopeManager.isScopeAllowed(s, res.locals.oauth.token.scope)
      )
    ) {
      const errors = [
        {
          msg: "Invalid value",
          param: "scope",
          location: "body",
        },
      ];
      return res
        .status(statusCodes.clientInputError)
        .json(new ErrorResponse(errorMessages.clientInputError, { errors }));
    }
    let action = "$addToSet";
    let arraycondition = "$each";
    if (req.body.status === false) {
      action = "$pull";
      arraycondition = "$in";
    }
    const model = req.body.targetType === "user" ? UserModel : ClientModel;
    await model.updateMany(
      { _id: { $in: req.body.targets } },
      {
        [action]: {
          scope: { [arraycondition]: req.body.scope },
        },
      }
    );
    res.status(statusCodes.success).json(new SuccessResponse());
  } catch (err) {
    log.error(err);
    return res.status(statusCodes.internalError).json(new ErrorResponse(errorMessages.internalError));
  }
};

export default POST_Access;