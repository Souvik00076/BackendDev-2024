"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getExpense_1 = require("../http/controllers/dashboard/getExpense");
const patchExpense_1 = require("../http/controllers/dashboard/patchExpense");
const router = (0, express_1.Router)();
router.get("/expense", getExpense_1.getExpense);
router.patch("/expense", patchExpense_1.patchExpense);
exports.default = router;
