import { Router } from "express";

import { permissionRoutes } from "./permissions.routes";
import { userRoutes } from "./users.routes";

const routes = Router();

routes.use("/users", userRoutes);
routes.use("/permissions", permissionRoutes);

export { routes };
