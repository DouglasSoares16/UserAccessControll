/* eslint-disable */
import { AppError } from "@shared/errors/AppError";

export namespace AuthenticateUserError {
  export class EmailOrPasswordIncorrect extends AppError {
    constructor() {
      super("Email or Password incorrect");
    }
  }
}
