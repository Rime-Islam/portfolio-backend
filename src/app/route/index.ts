import { authRouter } from '../modules/Auth/auth.route';
import { blogRouter } from '../modules/blog/blog.route';
import { exprienceRouter } from '../modules/exprience/exprience.route';
import { projectRouter } from '../modules/project/project.route';
import { skillRouter } from '../modules/skill/skill.route';
import { userRouter } from '../modules/user/user.route';
import { Router } from "express";



const router = Router();
const modulesRoute = [
    {
        route: userRouter,
        path: "/user",
      },
      {
        route: authRouter,
        path: "/auth",
      },
      {
        route: skillRouter,
        path: "/skills",
      },
      {
        route: projectRouter,
        path: "/projects",
      },
      {
        route: blogRouter,
        path: "/blogs",
      },
      {
        route: exprienceRouter,
        path: "/experiences",
      },
];

modulesRoute.forEach((route) => router.use(route.path, route.route));
export default router;