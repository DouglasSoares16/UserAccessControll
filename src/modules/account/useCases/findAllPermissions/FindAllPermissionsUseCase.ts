import { inject, injectable } from "tsyringe";

import { Permission } from "@modules/account/infra/typeorm/entities/Permission";
import { IPermissionRepository } from "@modules/account/repositories/IPermissionRepository";

@injectable()
class FindAllPermissionsUseCase {
  constructor(
    @inject("PermissionRepository")
    private permissionRepository: IPermissionRepository
  ) {}

  async execute(): Promise<Permission[]> {
    const permissions = await this.permissionRepository.findAll();

    return permissions;
  }
}

export { FindAllPermissionsUseCase };
