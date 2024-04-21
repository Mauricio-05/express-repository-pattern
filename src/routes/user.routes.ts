import { Router } from "express";

import SchemaValidatorMiddleware from "#middlewares/schema_validator.middleware";
import UserController from "#controllers/user.controller";

import { createUserDTO } from "#src/validators/user.dto";

class UserRoutes {
  public router = Router();

  constructor() {
    this.registerRoutes();
  }

  protected registerRoutes() {
    this.router.post(
      "",
      SchemaValidatorMiddleware.validateSchema(createUserDTO),
      (req, res, next) => UserController.createUser(req, res, next)
    );

    this.router.get("", (req, res, next) =>
      UserController.findAllUsers(req, res, next)
    );
  }
}

export default UserRoutes;
