import { container } from "tsyringe";

import { ExampleRepository } from "@modules/example/infra/typeorm/implementations/ExampleRepository";
import { IExampleRepository } from "@modules/example/repositories/IExampleRepository";

container.registerSingleton<IExampleRepository>(
  "ExampleRepository",
  ExampleRepository
);
