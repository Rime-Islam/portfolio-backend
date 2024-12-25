import { Request, Response, NextFunction, RequestHandler } from "express";

const NotFound: RequestHandler = (req: Request, res: Response, next: NextFunction): void => {
    res.status(404).json({
        success: false,
        message: "Not Found",
    });
};

export default NotFound;
