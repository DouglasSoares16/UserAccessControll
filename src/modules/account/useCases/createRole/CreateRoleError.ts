/* eslint-disable */
import { AppError } from "@shared/errors/AppError";

export namespace CreateRoleError {
  export class RoleAlreadyExists extends AppError {
    constructor() {
      super("Role Already Exists");
    }
  }
}
