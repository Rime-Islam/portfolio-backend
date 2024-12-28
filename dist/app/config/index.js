"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    port: process.env.PORT,
    db_url: process.env.DB_URL,
    saltRounds: process.env.BCRYPT_SALT_ROUND,
    jwt_secrete_key: process.env.ACCESS_TOKEN_SECRET,
    jwt_secrete_date: process.env.JWT_ACCESS_EXPIRES_IN,
    NODE_ENV: process.env.NODE_ENV,
    URL: process.env.FRONTEND_URL,
    BA_URL: process.env.BACKEND_URL,
    user_name: process.env.EMAIL_USER,
    password: process.env.EMAIL_PASS,
};
