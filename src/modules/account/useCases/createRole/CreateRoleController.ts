import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateRoleUseCase } from "./CreateRoleUseCase";

class CreateRoleController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createRoleUseCase = container.resolve(CreateRoleUseCase);

    const { name, description, permissions_id } = request.body;

    await createRoleUseCase.execute({ name, description, permissions_id });

    return response.status(201).json();
  }
}

export { CreateRoleController };
