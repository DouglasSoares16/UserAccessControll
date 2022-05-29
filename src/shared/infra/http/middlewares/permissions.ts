import { Request, Response, NextFunction } from "express";
import { decode } from "jsonwebtoken";

import { User } from "@modules/account/infra/typeorm/entities/User";
import { UserRepository } from "@modules/account/infra/typeorm/implementations/UserRepository";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}

async function decoder(request: Request): Promise<User> {
  const authHeader = request.headers.authorization;
  const userRepository = new UserRepository();

  if (!authHeader) {
    throw new AppError("Token missing", 401);
  }

  const [, token] = authHeader.split(" ");

  const payload = decode(token) as IPayload;

  const user = await userRepository.findByEmail(payload.sub);

  return user;
}

export function is(roles: string[]) {
  const roleAuthorized = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    const user = await decoder(request);

    const userRoles = user.roles.map((role) => role.name);

    const hasAllRoles = userRoles.some((role) => {
      return roles.includes(role);
    });

    if (hasAllRoles) {
      return next();
    }

    return response.status(401).json({ message: "Not Authorized" });
  };

  return roleAuthorized;
}
