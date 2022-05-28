import { ICreateRoleDTO } from "../dtos/ICreateRoleDTO";
import { Role } from "../infra/typeorm/entities/Role";

interface IRoleRepository {
  create(data: ICreateRoleDTO): Promise<void>;
  findByName(name: string): Promise<Role>;
}

export { IRoleRepository };
