import { container } from "tsyringe";

import { UserRepository } from "@modules/account/infra/typeorm/implementations/UserRepository";
import { IUserRepository } from "@modules/account/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
