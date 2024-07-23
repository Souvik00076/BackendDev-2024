import mongoose, { Schema } from "mongoose";
import { IUser } from "../../@types";

const userSchema = new Schema<IUser>(
  {
    userName: {
      type: String,
      required: [true, "User name cannot be empty"],
    },
    email: {
      type: String,
      required: [true, "Email cannot be empty"],
    },
    password: {
      type: String,
      required: [true, "Password cannot be empty"],
    },
    profilePhoto: {
      type: String,
      default: "",
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
const User = mongoose.model<IUser>("user", userSchema);
export default User;
