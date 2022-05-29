import { Router } from "express";

import { CreateProductController } from "@modules/market/useCases/createProduct/CreateProductController";
import { FindAllProductsController } from "@modules/market/useCases/findAllProducts/FindAllProductsController";

import { is } from "../middlewares/permissions";

const createProductController = new CreateProductController();
const findAllProductsController = new FindAllProductsController();

const productRoutes = Router();

productRoutes.post("/", is(["Administrator"]), createProductController.handle);
productRoutes.get(
  "/",
  is(["Administrator", "User"]),
  findAllProductsController.handle
);

export { productRoutes };
