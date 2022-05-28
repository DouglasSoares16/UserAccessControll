import { Router } from "express";

import { CreatePermissionController } from "@modules/account/useCases/createPermission/CreatePermissionController";

const createPermissionController = new CreatePermissionController();

const permissionRoutes = Router();

permissionRoutes.post("/", createPermissionController.handle);

export { permissionRoutes };
