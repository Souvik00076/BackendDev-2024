import { Document } from "mongoose";

export interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
  profilePhoto: string;
  isVerified: boolean;
  createdAt: Date;
}
