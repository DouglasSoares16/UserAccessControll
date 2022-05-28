import { Router } from "express";

import { CreateRoleController } from "@modules/account/useCases/createRole/CreateRoleController";
import { FindAllRolesController } from "@modules/account/useCases/findAllRoles/FindAllRolesController";

const createRoleController = new CreateRoleController();
const findAllRolesController = new FindAllRolesController();

const roleRoutes = Router();

roleRoutes.post("/", createRoleController.handle);
roleRoutes.get("/", findAllRolesController.handle);

export { roleRoutes };
