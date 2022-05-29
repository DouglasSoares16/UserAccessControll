import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createProductUseCase = container.resolve(CreateProductUseCase);

    const { name, price } = request.body;

    const product = await createProductUseCase.execute({ name, price });

    return response.status(201).json(product);
  }
}

export { CreateProductController };
