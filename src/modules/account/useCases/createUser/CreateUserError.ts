/* eslint-disable */
import { AppError } from "@shared/errors/AppError";

export namespace CreateUserError {
  export class UserAlreadyExists extends AppError {
    constructor() {
      super("User Already Exists");
    }
  }
}
