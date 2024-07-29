"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginAuth = void 0;
const User_1 = __importDefault(require("../../models/User"));
const utils_1 = require("../../../utils/");
const loginAuth = async ({ body: { email, password } }, res) => {
  try {
    const user = await User_1.default.findOne({
      email,
    });
    if (!user) {
      throw new Error("User not found");
    }
    const isMatch = user.match(password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }
    (0, utils_1.sendSuccessResponse)(res, "LOGIN OK", {
      id: user._id,
    });
  } catch (error) {
    (0, utils_1.sendErrorResponse)(res, error);
  }
};
exports.loginAuth = loginAuth;
