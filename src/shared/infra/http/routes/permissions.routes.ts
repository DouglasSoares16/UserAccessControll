import { Router } from "express";

import { CreatePermissionController } from "@modules/account/useCases/createPermission/CreatePermissionController";
import { FindAllPermissionsController } from "@modules/account/useCases/findAllPermissions/FindAllPermissionsController";

const createPermissionController = new CreatePermissionController();
const findAllPermissionsController = new FindAllPermissionsController();

const permissionRoutes = Router();

permissionRoutes.post("/", createPermissionController.handle);
permissionRoutes.get("/", findAllPermissionsController.handle);

export { permissionRoutes };
