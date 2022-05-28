import { Router } from "express";

import { CreateRoleController } from "@modules/account/useCases/createRole/CreatePermissionController";

const createRoleController = new CreateRoleController();

const roleRoutes = Router();

roleRoutes.post("/", createRoleController.handle);

export { roleRoutes };
