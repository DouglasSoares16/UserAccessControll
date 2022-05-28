import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { ICreateUserDTO } from "@modules/account/dtos/ICreateUserDTO";
import { User } from "@modules/account/infra/typeorm/entities/User";
import { IUserRepository } from "@modules/account/repositories/IUserRepository";

import { CreateUserError } from "./CreateUserError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({ email, name, password }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new CreateUserError.UserAlreadyExists();
    }

    const passwordHash = await hash(password, 10);

    const user = await this.userRepository.create({
      email,
      name,
      password: passwordHash,
    });

    return user;
  }
}

export { CreateUserUseCase };
