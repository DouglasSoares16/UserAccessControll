import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateExampleUseCase } from "./CreateExampleUseCase";

class CreateExampleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createExampleUseCase = container.resolve(CreateExampleUseCase);

    const { name, email, password } = request.body;

    await createExampleUseCase.execute({ name, email, password });

    return response.status(201).json();
  }
}

export { CreateExampleController };
