import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindAllPermissionsUseCase } from "./FindAllPermissionsUseCase";

class FindAllPermissionsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllPermissionsUseCase = container.resolve(
      FindAllPermissionsUseCase
    );

    const permission = await findAllPermissionsUseCase.execute();

    return response.json(permission);
  }
}

export { FindAllPermissionsController };
