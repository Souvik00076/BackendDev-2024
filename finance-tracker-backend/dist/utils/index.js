"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendErrorResponse = exports.sendSuccessResponse = void 0;
const sendSuccessResponse_1 = require("./sendSuccessResponse");
Object.defineProperty(exports, "sendSuccessResponse", {
  enumerable: true,
  get: function () {
    return sendSuccessResponse_1.sendSuccessResponse;
  },
});
const sendErrorResponse_1 = require("./sendErrorResponse");
Object.defineProperty(exports, "sendErrorResponse", {
  enumerable: true,
  get: function () {
    return sendErrorResponse_1.sendErrorResponse;
  },
});
