import { Response } from "express";

export const sendErrorResponse = (res: Response, message: string) => {
  res.status(400).json({
    success: false,
    message,
  });
};
