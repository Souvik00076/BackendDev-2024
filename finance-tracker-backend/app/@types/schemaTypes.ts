import { Document, Types } from "mongoose";
export enum TRANSACTION_STATUS {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
}
export interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
  profilePhoto: string;
  isVerified: boolean;
  createdAt: Date;
  match: (cred: string) => Promise<boolean>;
}

export interface IUserExpense extends Document {
  userId: Types.ObjectId;
  month: string;
  totalIncome: number;
  totalExpense: number;
}

export interface ITransactions extends Document {
  userId: Types.ObjectId;
  expenseId: Types.ObjectId;
  transactionType: TRANSACTION_STATUS;
  createdAt: Date;
  amount: number;
}
