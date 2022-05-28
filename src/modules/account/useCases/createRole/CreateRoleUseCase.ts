import { inject, injectable } from "tsyringe";

import { ICreateRoleDTO } from "@modules/account/dtos/ICreateRoleDTO";
import { IPermissionRepository } from "@modules/account/repositories/IPermissionRepository";
import { IRoleRepository } from "@modules/account/repositories/IRoleRepository";

import { CreateRoleError } from "./CreateRoleError";

@injectable()
class CreateRoleUseCase {
  constructor(
    @inject("RoleRepository")
    private roleRepository: IRoleRepository,

    @inject("PermissionRepository")
    private permissionRepository: IPermissionRepository
  ) {}

  async execute({
    description,
    name,
    permissions_id,
  }: ICreateRoleDTO): Promise<void> {
    const role = await this.roleRepository.findByName(name);

    if (role) {
      throw new CreateRoleError.RoleAlreadyExists();
    }

    const permissions = await this.permissionRepository.findAllByIds(
      permissions_id
    );

    await this.roleRepository.create({
      description,
      name,
      permissions,
    });
  }
}

export { CreateRoleUseCase };
