import { getRepository, Repository } from "typeorm";

import { ICreateRoleDTO } from "@modules/account/dtos/ICreateRoleDTO";
import { IRoleRepository } from "@modules/account/repositories/IRoleRepository";

import { Role } from "../entities/Role";

class RoleRepository implements IRoleRepository {
  private repository: Repository<Role>;

  constructor() {
    this.repository = getRepository(Role);
  }

  async findAll(): Promise<Role[]> {
    return this.repository.find({
      relations: ["permissions"],
    });
  }

  async findByName(name: string): Promise<Role> {
    const role = await this.repository.findOne({
      where: {
        name,
      },
    });

    return role;
  }

  async create({
    name,
    description,
    permissions,
  }: ICreateRoleDTO): Promise<void> {
    const role = this.repository.create({ name, description, permissions });

    await this.repository.save(role);
  }
}

export { RoleRepository };
