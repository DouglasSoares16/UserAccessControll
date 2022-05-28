import "reflect-metadata";
import "express-async-errors";
import "../typeorm/connection";
import "@shared/container";

import express from "express";

import { ErrorMiddleware } from "./middlewares/ErrorMiddleware";
import { routes } from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

app.use(ErrorMiddleware);

app.listen(5500, () => console.log("Server is running ;)"));
