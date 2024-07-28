import { Response } from "express";

export const sendErrorResponse = (res: Response, error: Error) => {
  res.status(400).json({
    success: false,
    message: error.message,
  });
};
