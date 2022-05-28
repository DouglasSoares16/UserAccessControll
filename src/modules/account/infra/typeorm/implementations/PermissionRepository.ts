import { getRepository, Repository } from "typeorm";

import { ICreatePermissionDTO } from "@modules/account/dtos/ICreatePermissionDTO";
import { IPermissionRepository } from "@modules/account/repositories/IPermissionRepository";

import { Permission } from "../entities/Permission";

class PermissionRepository implements IPermissionRepository {
  private repository: Repository<Permission>;

  constructor() {
    this.repository = getRepository(Permission);
  }

  async findAll(): Promise<Permission[]> {
    return this.repository.find();
  }

  async findAllByIds(ids: string[]): Promise<Permission[]> {
    const permisisons = await this.repository.findByIds(ids);

    return permisisons;
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
