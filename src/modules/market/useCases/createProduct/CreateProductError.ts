/* eslint-disable */
import { AppError } from "@shared/errors/AppError";

export namespace CreateProductError {
  export class ProductAlreadyExists extends AppError {
    constructor() {
      super("Product Already Exists");
    }
  }
}
