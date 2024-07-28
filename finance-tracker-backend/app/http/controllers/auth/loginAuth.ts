import { Request, Response } from "express";
import User from "../../models/User";
import { sendSuccessResponse, sendErrorResponse } from "../../../utils/";
export const loginAuth = async (
  { body: { email, password } }: Request,
  res: Response,
) => {
  try {
    const user = await User.findOne({
      email,
    });
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = user.match(password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }
    sendSuccessResponse(res, "LOGIN OK");
  } catch (error) {
    sendErrorResponse(res, error);
  }
};
