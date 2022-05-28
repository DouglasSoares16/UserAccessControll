import { container } from "tsyringe";

import { PermissionRepository } from "@modules/account/infra/typeorm/implementations/PermissionRepository";
import { UserRepository } from "@modules/account/infra/typeorm/implementations/UserRepository";
import { IPermissionRepository } from "@modules/account/repositories/IPermissionRepository";
import { IUserRepository } from "@modules/account/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IPermissionRepository>(
  "PermissionRepository",
  PermissionRepository
);
