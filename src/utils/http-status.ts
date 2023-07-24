export const statusCodes = {
  success: 200,
  created: 201,
  internalError: 500,
  clientInputError: 400,
  conflict: 409,
  tooManyRequests: 429,
  forbidden: 403,
  notFound: 404,
  unauthorized: 401,
  unprocessableEntity: 422,
  resourceNotActive: 401,
};

export const errorMessages = {
  internalError: "InternalServerError",
  clientInputError: "ClientInputError",
  invalidInviteCode: "InvalidInviteCode",
  rateLimitError: "RateLimitError",
  conflict: "ResourceConflict",
  creationThrottled: "CreationThrottled",
  inviteCodesHidden: "InviteCodesHidden",
  badEmailDomain: "BadEmailDomain",
  invalidFile: "InvalidFile",
  banned: "Banned",
  unauthorized: "Unauthorized",
  insufficientPrivileges: "InsufficientPrivileges",
  forbidden: "Forbidden",
  notFound: "NotFound",
  accessDenied: "AccessDenied",
  resourceDoesNotBelongToUser: "ResourceDoesNotBelongToUser",
  unprocessableEntity: "UnprocessableEntity",
  deleteNondeletableField: "DeleteNondeletableField",
  resourceDoesNotExist: "ResourceDoesNotExist",
  incompleteSubmission: "IncompleteSubmission",
  resourceNotActive: "ResourceNotActive",
  insufficientCredits: "InsufficientCredits",
};
