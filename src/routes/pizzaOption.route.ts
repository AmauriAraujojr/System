import { Router } from "express";
import { pizzaOptionController } from "../controllers";
import { validateBody } from "../middlewares/validadeBody.middleware";
import { pizzaOptionCreateSchema } from "../schemas/pizzaOption.schema";
import { VerifyPizzaExists } from "../middlewares/verifyPizza.middleware";

export const pizzaOptionRouter:Router=Router();

pizzaOptionRouter.post("/:id", VerifyPizzaExists, validateBody(pizzaOptionCreateSchema), pizzaOptionController.create)

pizzaOptionRouter.get("",pizzaOptionController.read)