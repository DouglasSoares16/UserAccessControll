import { ICreateProductDTO } from "../dtos/ICreateProductDTO";
import { Product } from "../infra/typeorm/entities/Product";

interface IProductRepository {
  create(data: ICreateProductDTO): Promise<Product>;
  findByName(name: string): Promise<Product>;
  findAll(): Promise<Product[]>;
}

export { IProductRepository };
