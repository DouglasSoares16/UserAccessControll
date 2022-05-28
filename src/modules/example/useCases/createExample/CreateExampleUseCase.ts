import { IExampleRepository } from "@modules/example/repositories/IExampleRepository";
import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

import { ICreateExampleDTO } from "./ICreateExampleDTO";

@injectable()
class CreateExampleUseCase {
  constructor(
    @inject("ExampleRepository")
    private exampleRepository: IExampleRepository
  ) {}

  async execute({ email, name, password }: ICreateExampleDTO): Promise<void> {
    const emailAlreadyExists = await this.exampleRepository.findByEmail(email);

    if (emailAlreadyExists) {
      throw new AppError("Email Already Exists!");
    }

    const nameAlreadyExists = await this.exampleRepository.findByName(name);

    if (nameAlreadyExists) {
      throw new AppError("Name Already Exists!");
    }

    const passwordHash = await hash(password, 10);

    await this.exampleRepository.create({
      name,
      email,
      password: passwordHash,
    });
  }
}

export { CreateExampleUseCase };
