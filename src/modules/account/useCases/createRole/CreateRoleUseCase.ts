import { inject, injectable } from "tsyringe";

import { ICreateRoleDTO } from "@modules/account/dtos/ICreateRoleDTO";
import { IRoleRepository } from "@modules/account/repositories/IRoleRepository";

import { CreateRoleError } from "./CreateRoleError";

@injectable()
class CreateRoleUseCase {
  constructor(
    @inject("RoleRepository")
    private roleRepository: IRoleRepository
  ) {}

  async execute({ description, name }: ICreateRoleDTO): Promise<void> {
    const role = await this.roleRepository.findByName(name);

    if (role) {
      throw new CreateRoleError.RoleAlreadyExists();
    }

    await this.roleRepository.create({ description, name });
  }
}

export { CreateRoleUseCase };
