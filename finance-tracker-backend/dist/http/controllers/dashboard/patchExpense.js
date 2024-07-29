"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.patchExpense = void 0;
const utils_1 = require("../../../utils");
const UserExpense_1 = __importDefault(require("../../models/UserExpense"));
const patchExpense = async (
  { query: { userId, resetBalance }, body: { totalExpense, income } },
  res,
) => {
  try {
    if (!userId) {
      throw new Error("User Id not found");
    }
    const month = (0, utils_1.getCurrentMonth)();
    const expense = await UserExpense_1.default.findOne({
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
    (0, utils_1.sendSuccessResponse)(res, "GET OK");
  } catch (error) {
    (0, utils_1.sendErrorResponse)(res, error);
  }
};
exports.patchExpense = patchExpense;
