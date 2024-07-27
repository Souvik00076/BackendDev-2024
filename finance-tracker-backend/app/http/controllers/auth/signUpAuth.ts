import { Request, Response } from "express";
import User from "../../models/User";
import { sendSuccessResponse, sendErrorResponse } from "../../../utils";
export const signUpAuth = async (
  { body: { email, password, userName } }: Request,
  res: Response,
) => {
  try {
    if (!email) {
      throw new Error("Email Not Found");
    }
    if (!password) {
      throw new Error("Password Not found");
    }

    if (!userName) {
      throw new Error("User name not provided");
    }
    const user = await User.create({
      userName,
      email,
      password,
    });

    sendSuccessResponse(res, "AUTH OK");
  } catch (error) {
    sendErrorResponse(res, "Something error happened");
  }
};
