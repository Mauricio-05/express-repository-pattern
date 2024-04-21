import { v4 as uuidv4 } from "uuid";

import { IUser } from "#models/user.model";

import { IUserRepository } from "#types/user.type";

class UserRepository implements IUserRepository {
  private data: IUser[] = [];

  async createUser(user: IUser): Promise<IUser> {
    await new Promise((r) => setTimeout(r, 500));

    const createUser = { ...user, id: uuidv4() };

    this.data.push(createUser);

    return createUser;
  }

  async findAll(): Promise<IUser[]> {
    await new Promise((r) => setTimeout(r, 500));
    return this.data;
  }
}

export default new UserRepository();
