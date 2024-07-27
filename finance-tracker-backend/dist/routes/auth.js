"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const loginAuth_1 = require("../http/controllers/auth/loginAuth");
const signUpAuth_1 = require("../http/controllers/auth/signUpAuth");
const router = (0, express_1.Router)();
router.post("/login", loginAuth_1.loginAuth);
router.post("/sign-up", signUpAuth_1.signUpAuth);
exports.default = router;
