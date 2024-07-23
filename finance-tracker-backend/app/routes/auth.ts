import { Router } from "express";
import { loginAuth } from "../http/controllers/auth/loginAuth";
import { signUpAuth } from "../http/controllers/auth/signUpAuth";

const router = Router();
router.post("/login", loginAuth);
router.post("/sign-up", signUpAuth);
export default router;
