import { Role } from "../infra/typeorm/entities/Role";

export interface ICreateUserDTO {
  name: string;
  email: string;
  password: string;
  roles_id?: string[];
  roles?: Role[];
}
