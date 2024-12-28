"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const globalErrorHandler_1 = __importDefault(require("./app/middleware/globalErrorHandler"));
const notFound_1 = __importDefault(require("./app/middleware/notFound"));
const route_1 = __importDefault(require("./app/route"));
const app = (0, express_1.default)();
const corsOptions = {
    origin: [
        "*",
        "http://localhost:5173",
        "http://localhost:3000"
    ],
    credentials: true,
    optionsSuccessStatus: 204,
};
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use("/api", route_1.default);
app.get('/', (req, res) => {
    res.send('Hello Wrold');
});
app.use(globalErrorHandler_1.default);
app.use(notFound_1.default);
exports.default = app;
