import mongoose, { Schema } from "mongoose";
import { IUserExpense } from "../../@types";
import { Types } from "mongoose";

const userExpenseSchema = new Schema<IUserExpense>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: [true, "User ID cannot be empty"],
    },
    month: {
      type: String,
      enum: [
        "JANUARY",
        "FEBRUARY",
        "MARCH",
        "APRIL",
        "MAY",
        "JUNE",
        "JULY",
        "AUGUST",
        "SEPTEMBER",
        "OCTOBER",
        "NOVEMBER",
        "DECEMBER",
      ],
      required: [true, "Month cannot be empty"],
    },
    totalIncome: {
      type: Number,
      default: 0,
    },
    totalExpense: {
      type: Number,
      default: 0,
    },
    currentBalance: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

const Expense = mongoose.model<IUserExpense>("userexpense", userExpenseSchema);

export default Expense;
