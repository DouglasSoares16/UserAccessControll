import { ICreateRoleDTO } from "../dtos/ICreateRoleDTO";
import { Role } from "../infra/typeorm/entities/Role";

interface IRoleRepository {
  create(data: ICreateRoleDTO): Promise<void>;
  findByName(name: string): Promise<Role>;
  findAll(): Promise<Role[]>;
}

export { IRoleRepository };
