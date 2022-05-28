import { ICreatePermissionDTO } from "../dtos/ICreatePermissionDTO";

interface IPermissionRepository {
  create(data: ICreatePermissionDTO): Promise<void>;
}

export { IPermissionRepository };
