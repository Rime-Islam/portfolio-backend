import { Router } from "express";
import { auth } from "../../middleware/Auth";
import { exprienceController } from "./exprience.controller";

const router = Router();

router.post("/add", auth("admin"), exprienceController.addExprience);
router.get("/", exprienceController.getAllExprience);
router.get("/:id", exprienceController.getSingleExprience);
router.delete("/:id", auth("admin"), exprienceController.deleteExprience);
router.patch("/:id", auth("admin"), exprienceController.updateExprience);

export const exprienceRouter = router;