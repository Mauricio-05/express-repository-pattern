import { z } from "zod";

import { IUser } from "#src/models/user.model";
import { createUserDTO } from "#src/validators/user.dto";

export type TCreateUser = z.infer<typeof createUserDTO>["body"];

export interface IUserRepository {
  createUser(user: TCreateUser): Promise<IUser>;
  findAll(): Promise<IUser[]>;
}
