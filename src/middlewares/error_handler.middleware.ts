import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";

class ErrorHandlerMiddleware {
  async handler(
    error: unknown,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) {
    if (error instanceof ZodError) {
      const errors = error.issues.map((issue) => ({
        path: issue.path,
        message: issue.message,
      }));

      return res.status(400).json({
        status: 400,
        message: "Bad request",
        errors,
      });
    }

    // internal server Error
    return res.status(500).json({
      status: 500,
      message: "Internal server error",
    });
  }
}

export default new ErrorHandlerMiddleware();
