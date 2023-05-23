import { Request, Response } from "express";
import { OAuthServer } from "../../../singleton/oauth-server";
import { Request as OAuthRequest, Response as OAuthResponse } from "@node-oauth/oauth2-server";
import { Configuration } from "../../../singleton/configuration";
import { statusCodes } from "../../../utils/http-status";

const oauthOptions = {
  requireClientAuthentication: {
    authorization_code: false,
    refresh_token: false,
  },
};

async function ALL__Token(req: Request, res: Response) {
  try {
    const token = await OAuthServer.server.token(new OAuthRequest(req), new OAuthResponse(res), oauthOptions);
    const response = {
      access_token: token.accessToken,
      token_type: "Bearer",
      expires_in: Configuration.get("oauth.access-token-lifetime"),
      refresh_token: token.refreshToken,
    };
    res.status(statusCodes.success).json(response);
  } catch (error: any) {
    if (!error.name) {
      return res.json({ error: "unknown_error" });
    }
    res.status(statusCodes.unauthorized).json({ error: error.name, error_description: error.message });
  }
}

export default ALL__Token;
