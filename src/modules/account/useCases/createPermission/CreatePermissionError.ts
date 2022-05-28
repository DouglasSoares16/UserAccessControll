/* eslint-disable */
import { AppError } from "@shared/errors/AppError";

export namespace CreatePermissionError {
  export class PermissionAlreadyExists extends AppError {
    constructor() {
      super("Permission Already Exists");
    }
  }
}
