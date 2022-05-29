import { inject, injectable } from "tsyringe";

import { ICreateProductDTO } from "@modules/market/dtos/ICreateProductDTO";
import { Product } from "@modules/market/infra/typeorm/entities/Product";
import { IProductRepository } from "@modules/market/repositories/IProductRepository";

import { CreateProductError } from "./CreateProductError";

@injectable()
class CreateProductUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async execute({ name, price }: ICreateProductDTO): Promise<Product> {
    const productAlreadyExists = await this.productRepository.findByName(name);

    if (productAlreadyExists) {
      throw new CreateProductError.ProductAlreadyExists();
    }

    const product = await this.productRepository.create({ name, price });

    return product;
  }
}

export { CreateProductUseCase };
