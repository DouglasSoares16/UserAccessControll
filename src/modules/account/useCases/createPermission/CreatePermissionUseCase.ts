import { inject, injectable } from "tsyringe";

import { ICreatePermissionDTO } from "@modules/account/dtos/ICreatePermissionDTO";
import { IPermissionRepository } from "@modules/account/repositories/IPermissionRepository";

import { CreatePermissionError } from "./CreatePermissionError";

@injectable()
class CreatePermissionUseCase {
  constructor(
    @inject("PermissionRepository")
    private permissionRepository: IPermissionRepository
  ) {}

  async execute({ description, name }: ICreatePermissionDTO): Promise<void> {
    const permission = await this.permissionRepository.findByName(name);

    if (permission) {
      throw new CreatePermissionError.PermissionAlreadyExists();
    }

    await this.permissionRepository.create({ description, name });
  }
}

export { CreatePermissionUseCase };
