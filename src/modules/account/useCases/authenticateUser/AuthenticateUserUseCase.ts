import { compare } from "bcryptjs";
import { auth } from "config/auth";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "@modules/account/repositories/IUserRepository";

import { AuthenticateUserError } from "./AuthenticateUserError";

interface IAuthenticateUserProps {
  email: string;
  password: string;
}

interface IAuthenticateUserResponse {
  token: string;
  user: {
    name: string;
    email: string;
  };
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  async execute({
    email,
    password,
  }: IAuthenticateUserProps): Promise<IAuthenticateUserResponse> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AuthenticateUserError.EmailOrPasswordIncorrect();
    }

    const passwordMatch = compare(password, user.password);

    if (!passwordMatch) {
      throw new AuthenticateUserError.EmailOrPasswordIncorrect();
    }

    const roles = user.roles.map((role) => role.name);

    const token = sign({ roles }, auth.secret, {
      subject: user.email,
      expiresIn: "15m",
    });

    return {
      token,
      user: {
        email: user.email,
        name: user.name,
      },
    };
  }
}

export { AuthenticateUserUseCase };
