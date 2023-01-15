import express from "express";
import { DelegatedAuthFlow } from "../../middleware/authenticate";
import AuthorizeAdmin from "../../middleware/authorize-admin";
import POST_Access, { POST_AccessValidator } from "./access.post";
import GET_Hello from "./hello.get";
import PATCH_User, { PATCH_UserValidator } from "./user.patch";

const AdminApiRouter = express.Router();

AdminApiRouter.get("/hello", ...DelegatedAuthFlow, AuthorizeAdmin, GET_Hello);
AdminApiRouter.post(
  "/access",
  ...DelegatedAuthFlow,
  AuthorizeAdmin,
  POST_AccessValidator,
  POST_Access
);
AdminApiRouter.patch(
  "/user",
  ...DelegatedAuthFlow,
  AuthorizeAdmin,
  PATCH_UserValidator,
  PATCH_User
);

export default AdminApiRouter;