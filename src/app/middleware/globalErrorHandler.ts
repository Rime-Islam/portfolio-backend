import { ErrorRequestHandler, Request, Response, NextFunction } from "express";

const globalErrorHandler: ErrorRequestHandler = (
    err: any,
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    console.error(err.stack); // Log the error stack (optional)

    res.status(err.status || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
    });
};

export default globalErrorHandler;
