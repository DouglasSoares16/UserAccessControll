import { getRepository, Repository } from "typeorm";

import { ICreateProductDTO } from "@modules/market/dtos/ICreateProductDTO";
import { IProductRepository } from "@modules/market/repositories/IProductRepository";

import { Product } from "../entities/Product";

class ProductRepository implements IProductRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async findAll(): Promise<Product[]> {
    return this.repository.find();
  }

  async findByName(name: string): Promise<Product> {
    return this.repository.findOne({
      where: {
        name,
      },
    });
  }

  async create(data: ICreateProductDTO): Promise<Product> {
    const product = this.repository.create(data);

    await this.repository.save(product);

    return product;
  }
}

export { ProductRepository };
