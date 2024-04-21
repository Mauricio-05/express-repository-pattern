import { Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

class SchemaValidatorMiddleware {
  validateSchema(schema: AnyZodObject) {
    return (req: Request, _res: Response, next: NextFunction) => {
      try {
        schema.parse({ body: req.body, params: req.params, query: req.query });
        next();
      } catch (error) {
        next(error);
      }
    };
  }
}

export default new SchemaValidatorMiddleware();
