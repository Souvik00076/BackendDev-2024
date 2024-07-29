import { Router } from "express";
import { getExpense } from "../http/controllers/dashboard/getExpense";
import { patchExpense } from "../http/controllers/dashboard/patchExpense";
const router = Router();

router.get("/expense", getExpense);
router.patch("/expense", patchExpense);
export default router;
