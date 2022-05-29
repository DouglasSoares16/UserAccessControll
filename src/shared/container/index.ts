import { container } from "tsyringe";

import { PermissionRepository } from "@modules/account/infra/typeorm/implementations/PermissionRepository";
import { RoleRepository } from "@modules/account/infra/typeorm/implementations/RoleRepository";
import { UserRepository } from "@modules/account/infra/typeorm/implementations/UserRepository";
import { IPermissionRepository } from "@modules/account/repositories/IPermissionRepository";
import { IRoleRepository } from "@modules/account/repositories/IRoleRepository";
import { IUserRepository } from "@modules/account/repositories/IUserRepository";
import { ProductRepository } from "@modules/market/infra/typeorm/implementations/ProductRepository";
import { IProductRepository } from "@modules/market/repositories/IProductRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
container.registerSingleton<IPermissionRepository>(
  "PermissionRepository",
  PermissionRepository
);
container.registerSingleton<IRoleRepository>("RoleRepository", RoleRepository);
container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductRepository
);
