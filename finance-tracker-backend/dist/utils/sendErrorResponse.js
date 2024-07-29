"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendErrorResponse = void 0;
const sendErrorResponse = (res, error) => {
  res.status(400).json({
    success: false,
    message: error.message,
  });
};
exports.sendErrorResponse = sendErrorResponse;
