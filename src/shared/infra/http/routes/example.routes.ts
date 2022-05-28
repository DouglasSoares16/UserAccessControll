import { Router } from "express";

import { CreateExampleController } from "@modules/example/useCases/createExample/CreateExampleController";

const createExampleController = new CreateExampleController();

const exampleRoutes = Router();

exampleRoutes.post("/", createExampleController.handle);

export { exampleRoutes };
