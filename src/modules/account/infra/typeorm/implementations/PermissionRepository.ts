import { getRepository, Repository } from "typeorm";

import { ICreatePermissionDTO } from "@modules/account/dtos/ICreatePermissionDTO";
import { IPermissionRepository } from "@modules/account/repositories/IPermissionRepository";

import { Permission } from "../entities/Permission";

class PermissionRepository implements IPermissionRepository {
  private repository: Repository<Permission>;

  constructor() {
    this.repository = getRepository(Permission);
  }
  async findByName(name: string): Promise<Permission> {
    const permission = await this.repository.findOne({
      where: {
        name,
      },
    });

    return permission;
  }

  async create(data: ICreatePermissionDTO): Promise<void> {
    const permission = this.repository.create(data);

    await this.repository.save(permission);
  }
}

export { PermissionRepository };