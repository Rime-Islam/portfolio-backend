import { Router } from "express";
import { auth } from "../../middleware/Auth";
import { projectController } from "./project.controller";

const router = Router();

router.post("/add", auth("admin"), projectController.addProject);
router.get("/", projectController.getAllProject);
router.get("/:id", projectController.getSingleProject);
router.delete("/:id", auth("admin"), projectController.deleteProject);
router.patch("/:id", auth("admin"), projectController.updateProject);

export const projectRouter = router;