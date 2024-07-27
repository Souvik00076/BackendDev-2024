"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./app/config");
const routes_1 = require("./app/routes");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(config_1.BASE_URI, routes_1.baseRoute);
const startServer = async () => {
  try {
    await (0, config_1.connectDb)(process.env.MONGO_URI);
    const server = app.listen(8080, () => {
      console.log("server listening at port number 8080");
    });
  } catch (error) {
    console.log("here");
    console.log(error);
  }
};
startServer();
