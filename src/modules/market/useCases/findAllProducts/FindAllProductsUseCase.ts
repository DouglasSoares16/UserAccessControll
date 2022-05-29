import { inject, injectable } from "tsyringe";

import { Product } from "@modules/market/infra/typeorm/entities/Product";
import { IProductRepository } from "@modules/market/repositories/IProductRepository";

@injectable()
class FindAllProductsUseCase {
  constructor(
    @inject("ProductRepository")
    private productRepository: IProductRepository
  ) {}

  async execute(): Promise<Product[]> {
    const products = await this.productRepository.findAll();

    return products;
  }
}

export { FindAllProductsUseCase };
