import { Router } from "express";
import { validateBody } from "../middlewares/validadeBody.middleware";
import { VerifyEntitieExists } from "../middlewares/verifyEntitieID.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { pizzaCreateSchema } from "../schemas/pizza.schema";
import { pizzaController } from "../controllers";

export const pizzaRouter:Router=Router();

pizzaRouter.post("", verifyToken,VerifyEntitieExists, validateBody(pizzaCreateSchema), pizzaController.create)

pizzaRouter.get("",pizzaController.read)