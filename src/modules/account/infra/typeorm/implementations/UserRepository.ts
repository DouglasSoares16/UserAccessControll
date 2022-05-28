import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "@modules/account/dtos/ICreateUserDTO";
import { IUserRepository } from "@modules/account/repositories/IUserRepository";

import { User } from "../entities/User";

class UserRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });

    return user;
  }

  async create({
    name,
    email,
    password,
    roles,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({ name, email, password, roles });

    await this.repository.save(user);

    return user;
  }
}

export { UserRepository };
