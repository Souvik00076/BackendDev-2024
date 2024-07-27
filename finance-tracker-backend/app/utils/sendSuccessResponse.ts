import { Response } from "express";

export const sendSuccessResponse = (
  res: Response,
  message: string,
  data?: unknown,
) => {
  return res.status(200).json({
    success: true,
    data: data,
  });
};
