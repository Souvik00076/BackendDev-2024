"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExpense = void 0;
const utils_1 = require("../../../utils");
const UserExpense_1 = __importDefault(require("../../models/UserExpense"));
const getExpense = async ({ query: { userId } }, res) => {
  try {
    if (!userId) {
      throw new Error("User Id not found");
    }
    const month = (0, utils_1.getCurrentMonth)();
    const expense = await UserExpense_1.default.findOne({
      userId,
    });
    if (!expense) {
      throw new Error("No expense found");
    }
    (0, utils_1.sendSuccessResponse)(res, "GET OK", {
      currentBalance: expense.currentBalance,
      totalIncome: expense.totalIncome,
      totalExpense: expense.totalExpense,
    });
  } catch (error) {
    (0, utils_1.sendErrorResponse)(res, error);
  }
};
exports.getExpense = getExpense;
