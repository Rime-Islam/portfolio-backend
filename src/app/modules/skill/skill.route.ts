import { Router } from "express";
import { skillController } from "./skill.controller";
import { auth } from "../../middleware/Auth";


const router = Router();

router.post("/add", auth("admin"), skillController.addSkill);
router.get("/", skillController.getAllSkill);
router.patch("/:id", auth("admin"), skillController.updateSkill);
router.delete("/:id", auth("admin"), skillController.deleteSkill);

export const skillRouter = router;