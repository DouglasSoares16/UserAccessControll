import { inject, injectable } from "tsyringe";

import { Role } from "@modules/account/infra/typeorm/entities/Role";
import { IRoleRepository } from "@modules/account/repositories/IRoleRepository";

@injectable()
class FindAllRolesUseCase {
  constructor(
    @inject("RoleRepository")
    private roleRepository: IRoleRepository
  ) {}

  async execute(): Promise<Role[]> {
    const roles = await this.roleRepository.findAll();

    return roles;
  }
}

export { FindAllRolesUseCase };
