import catchAsync from "../utilits/catchAsync";
import AppError from "../Error/AppError";
import httpStatus from "http-status";
import jwt from "jsonwebtoken";
import config from "../config";



const auth = (...requiredRoles) => {
    return catchAsync(async (req, res, next) => {
        const authHeader = req.headers.authorization;

        const token = authHeader?.split(" ")[1];
        if(!token) {
            throw new AppError(
                httpStatus.UNAUTHORIZED,
                "You have no access to this routes"
            );
        }

        const decoded = jwt.verify(
            token,
            config.jwt_access_token
        );

        const role = decoded.role;
        if(requiredRoles && !requiredRoles.includes(role)) {
            throw new AppError(
                httpStatus.UNAUTHORIZED,
                "You have no access to this route"
            );
        }
        req.user = decoded;
        next();
    });
};

export default auth;