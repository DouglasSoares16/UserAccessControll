import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreatePermissionUseCase } from "./CreatePermissionUseCase";

class CreatePermissionController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createPermissionUseCase = container.resolve(CreatePermissionUseCase);

    const { name, description } = request.body;

    await createPermissionUseCase.execute({ name, description });

    return response.status(201).json();
  }
}

export { CreatePermissionController };
