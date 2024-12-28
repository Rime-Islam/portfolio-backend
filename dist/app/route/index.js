"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_route_1 = require("../modules/Auth/auth.route");
const skill_route_1 = require("../modules/skill/skill.route");
const user_route_1 = require("../modules/user/user.route");
const express_1 = require("express");
const router = (0, express_1.Router)();
const modulesRoute = [
    {
        route: user_route_1.userRouter,
        path: "/user",
    },
    {
        route: auth_route_1.authRouter,
        path: "/auth",
    },
    {
        route: skill_route_1.skillRouter,
        path: "/skills",
    },
];
modulesRoute.forEach((route) => router.use(route.path, route.route));
exports.default = router;
