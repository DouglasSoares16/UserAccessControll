import { getRepository, Repository } from "typeorm";

import { ICreateRoleDTO } from "@modules/account/dtos/ICreateRoleDTO";
import { IRoleRepository } from "@modules/account/repositories/IRoleRepository";

import { Role } from "../entities/Role";

class RoleRepository implements IRoleRepository {
  private repository: Repository<Role>;

  constructor() {
    this.repository = getRepository(Role);
  }

  async findByName(name: string): Promise<Role> {
    const role = await this.repository.findOne({
      where: {
        name,
      },
    });

    return role;
  }

  async create(data: ICreateRoleDTO): Promise<void> {
    const role = this.repository.create(data);

    await this.repository.save(role);
  }
}

export { RoleRepository };
