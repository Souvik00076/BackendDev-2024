"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (
          !desc ||
          ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
        ) {
          desc = {
            enumerable: true,
            get: function () {
              return m[k];
            },
          };
        }
        Object.defineProperty(o, k2, desc);
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const userSchema = new mongoose_1.Schema(
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
    const salt = await bcryptjs_1.default.genSalt(10); // Adjust salt rounds as needed
    this.password = await bcryptjs_1.default.hash(this.password, salt);
  }
  next();
});
userSchema.methods.match = async function (creadential) {
  const isMatch = await bcryptjs_1.default.compare(creadential, this.password);
  return isMatch;
};
const User = mongoose_1.default.model("user", userSchema);
exports.default = User;
