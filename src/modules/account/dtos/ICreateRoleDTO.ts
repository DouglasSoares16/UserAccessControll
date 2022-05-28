import { Permission } from "../infra/typeorm/entities/Permission";

export interface ICreateRoleDTO {
  name: string;
  description: string;
  permissions_id?: string[];
  permissions?: Permission[];
}
