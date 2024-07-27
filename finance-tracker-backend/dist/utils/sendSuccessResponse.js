"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSuccessResponse = void 0;
const sendSuccessResponse = (res, message, data) => {
  return res.status(200).json({
    success: true,
    data: data,
  });
};
exports.sendSuccessResponse = sendSuccessResponse;
