import { ICreatePermissionDTO } from "../dtos/ICreatePermissionDTO";
import { Permission } from "../infra/typeorm/entities/Permission";

interface IPermissionRepository {
  create(data: ICreatePermissionDTO): Promise<void>;
  findByName(name: string): Promise<Permission>;
  findAllByIds(ids: string[]): Promise<Permission[]>;
  findAll(): Promise<Permission[]>;
}

export { IPermissionRepository };
