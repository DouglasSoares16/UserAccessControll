import { Router } from "express";

import { permissionRoutes } from "./permissions.routes";
import { roleRoutes } from "./roles.routes";
import { userRoutes } from "./users.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/permissions", permissionRoutes);
routes.use("/roles", roleRoutes);

export { routes };
