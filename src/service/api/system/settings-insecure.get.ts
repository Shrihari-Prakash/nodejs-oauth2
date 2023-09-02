import { Logger } from "../../../singleton/logger";
const log = Logger.getLogger().child({ from: "system/settings" });

import { Request, Response } from "express";
import { errorMessages, statusCodes } from "../../../utils/http-status";
import { ErrorResponse, SuccessResponse } from "../../../utils/response";
import { Configuration } from "../../../singleton/configuration";

const GET__SettingsInsecure = async (_: Request, res: Response) => {
  try {
    const settings: any = {};
    Configuration.get("system.exposed-options.insecure").forEach((optionName: string) => {
      settings[optionName] = Configuration.get(optionName);
    });
    return res.status(statusCodes.success).json(new SuccessResponse({ settings }));
  } catch (err) {
    log.error(err);
    return res.status(statusCodes.internalError).json(new ErrorResponse(errorMessages.internalError));
  }
};

export default GET__SettingsInsecure;
