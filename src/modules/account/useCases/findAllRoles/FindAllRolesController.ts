import { Request, Response } from "express";
import { container } from "tsyringe";

import { FindAllRolesUseCase } from "./FindAllRolesUseCase";

class FindAllRolesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllRolesUseCase = container.resolve(FindAllRolesUseCase);

    const roles = await findAllRolesUseCase.execute();

    return response.json(roles);
  }
}

export { FindAllRolesController };
