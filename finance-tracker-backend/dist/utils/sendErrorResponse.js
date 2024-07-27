"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendErrorResponse = void 0;
const sendErrorResponse = (res, message) => {
  res.status(400).json({
    success: false,
    message,
  });
};
exports.sendErrorResponse = sendErrorResponse;
