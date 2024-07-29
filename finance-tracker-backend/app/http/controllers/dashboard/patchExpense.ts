import { Request, Response } from "express";
import {
  getCurrentMonth,
  sendErrorResponse,
  sendSuccessResponse,
} from "../../../utils";
import Expense from "../../models/UserExpense";
export const patchExpense = async (
  { query: { userId, resetBalance }, body: { totalExpense, income } }: Request,
  res: Response,
) => {
  try {
    if (!userId) {
      throw new Error("User Id not found");
    }
    const month = getCurrentMonth();
    const expense = await Expense.findOne({
      userId,
      month,
    });
    if (!expense) {
      throw new Error("No expense found");
    }
    if (expense) expense.totalExpense += parseInt(totalExpense);
    if (income) expense.totalIncome += parseInt(income);
    if (resetBalance) expense.currentBalance = 0;
    await expense.save();
    sendSuccessResponse(res, "GET OK");
  } catch (error) {
    sendErrorResponse(res, error as Error);
  }
};
