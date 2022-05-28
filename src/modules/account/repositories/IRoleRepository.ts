import { ICreateRoleDTO } from "../dtos/ICreateRoleDTO";

interface IRoleRepository {
  create(data: ICreateRoleDTO): Promise<void>;
}

export { IRoleRepository };
