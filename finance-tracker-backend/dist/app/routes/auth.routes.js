import { Router } from "express";
import { loginAuth, signUpAuth } from "../http/controllers";
const router = Router();
router.post("/login", loginAuth);
router.post("/sign-up", signUpAuth);
export default router;
