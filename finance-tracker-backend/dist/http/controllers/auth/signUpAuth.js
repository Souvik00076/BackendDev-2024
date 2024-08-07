"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpAuth = void 0;
const User_1 = __importDefault(require("../../models/User"));
const utils_1 = require("../../../utils");
const UserExpense_1 = __importDefault(require("../../models/UserExpense"));
const signUpAuth = async ({ body: { email, password, userName } }, res) => {
  try {
    if (!email) {
      throw new Error("Email Not Found");
    }
    if (!password) {
      throw new Error("Password Not found");
    }
    if (!userName) {
      throw new Error("User name not provided");
    }
    const user = await User_1.default.create({
      userName,
      email,
      password,
    });
    // Get the full name for the current month
    const month = (0, utils_1.getCurrentMonth)();
    await UserExpense_1.default.create({
      userId: user._id,
      month,
    });
    (0, utils_1.sendSuccessResponse)(res, "AUTH OK");
  } catch (error) {
    (0, utils_1.sendErrorResponse)(res, error);
  }
};
exports.signUpAuth = signUpAuth;
