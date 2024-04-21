import { Response, Request, NextFunction } from "express";

import UserRepository from "#repository/user.repository";

import { TCreateUser, IUserRepository } from "#types/user.type";

class UserController {
  constructor(private userRepository: IUserRepository) {}

  async createUser(
    req: Request<unknown, unknown, TCreateUser>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = req.body;
      const userCreate = await this.userRepository.createUser(user);

      return res.status(201).json({
        status: 201,
        userCreate,
        msg: "Created user success",
      });
    } catch (error) {
      next(error);
    }
  }

  async findAllUsers(_req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userRepository.findAll();

      return res.status(200).json({
        status: 200,
        users,
        msg: "All users list",
      });
    } catch (error) {
      next(error);
    }
  }
}

export default new UserController(UserRepository);
