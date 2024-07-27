import mongoose, { Schema } from "mongoose";
import { IUser } from "../../@types";
import bcrypt from "bcryptjs";
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

userSchema.pre("save", async function (next) {
  console.log(this.userName + " " + this.email);
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10); // Adjust salt rounds as needed
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

userSchema.methods.match = async function (creadential: string) {
  const isMatch = await bcrypt.compare(creadential, this.password);
  return isMatch;
};

const User = mongoose.model<IUser>("user", userSchema);
export default User;
