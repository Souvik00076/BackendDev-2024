import { Request, Response } from "express";
import {
  getCurrentMonth,
  sendErrorResponse,
  sendSuccessResponse,
} from "../../../utils";
import Expense from "../../models/UserExpense";

export const getExpense = async (
  { query: { userId } }: Request,
  res: Response,
) => {
  try {
    if (!userId) {
      throw new Error("User Id not found");
    }
    const month = getCurrentMonth();
    const expense = await Expense.findOne({
      userId,
    });
    if (!expense) {
      throw new Error("No expense found");
    }

    sendSuccessResponse(res, "GET OK", {
      currentBalance: expense.currentBalance,
      totalIncome: expense.totalIncome,
      totalExpense: expense.totalExpense,
    });
  } catch (error) {
    sendErrorResponse(res, error as Error);
  }
};
