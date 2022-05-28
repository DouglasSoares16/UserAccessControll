import { Router } from "express";

import { AuthenticateUserController } from "@modules/account/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "@modules/account/useCases/createUser/CreateUserController";

const createUserController = new CreateUserController();
const authenticateUserController = new AuthenticateUserController();

const userRoutes = Router();

userRoutes.post("/", createUserController.handle);
userRoutes.post("/session", authenticateUserController.handle);

export { userRoutes };
