"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BASE_URI = exports.connectDb = void 0;
const database_1 = require("./database");
Object.defineProperty(exports, "connectDb", {
  enumerable: true,
  get: function () {
    return database_1.connectDb;
  },
});
const routes_1 = require("./routes");
Object.defineProperty(exports, "BASE_URI", {
  enumerable: true,
  get: function () {
    return routes_1.BASE_URI;
  },
});
