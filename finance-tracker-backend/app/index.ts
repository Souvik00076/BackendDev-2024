import express from "express";
import { BASE_URI, connectDb } from "./app/config";
import { baseRoute } from "./app/routes";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(BASE_URI, baseRoute);
const startServer = async () => {
  try {
    await connectDb(process.env.MONGO_URI as string);
    const server = app.listen(8080, () => {
      console.log("server listening at port number 8080");
    });
  } catch (error) {
    console.log("here");
    console.log(error);
  }
};

startServer();
