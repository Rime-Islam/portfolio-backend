import { authRouter } from '../modules/Auth/auth.route';
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
];

modulesRoute.forEach((route) => router.use(route.path, route.route));
export default router;