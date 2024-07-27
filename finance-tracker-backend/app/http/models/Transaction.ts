import mongoose, { Schema, Types } from "mongoose";
import { ITransactions, TRANSACTION_STATUS } from "../../@types";

const transactionSchema = new Schema<ITransactions>(
  {
    userId: {
      type: Schema.Types.ObjectId,
    },
    expenseId: {
      type: Schema.Types.ObjectId,
    },
    transactionType: {
      type: String,
      enum: TRANSACTION_STATUS,
      required: [true, "transaction type cannot be empty"],
    },
    amount: {
      type: Number,
      required: [true, "Amount cannot be empty"],
    },
  },
  { timestamps: true },
);

const Transaction = mongoose.model<ITransactions>(
  "transaction",
  transactionSchema,
);
export default Transaction;
