"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotFound = (req, res, next) => {
    res.status(404).json({
        success: false,
        message: "Not Found",
    });
};
exports.default = NotFound;
