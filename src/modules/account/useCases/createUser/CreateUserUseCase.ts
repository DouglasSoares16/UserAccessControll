import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@modules/account/dtos/ICreateUserDTO";
import { User } from "@modules/account/infra/typeorm/entities/User";
import { IRoleRepository } from "@modules/account/repositories/IRoleRepository";
import { IUserRepository } from "@modules/account/repositories/IUserRepository";

import { CreateUserError } from "./CreateUserError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository,

    @inject("RoleRepository")
    private roleRepository: IRoleRepository
  ) {}

  async execute({
    email,
    name,
    password,
    roles_id,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new CreateUserError.UserAlreadyExists();
    }

    const passwordHash = await hash(password, 10);

    const roles = await this.roleRepository.findAllByIds(roles_id);

    const user = await this.userRepository.create({
      email,
      name,
      password: passwordHash,
      roles,
    });

    return user;
  }
}

export { CreateUserUseCase };
