import { Router } from "express";
import { VerifyProductExists } from "../middlewares/verifyProduct";
import { productSellController } from "../controllers";

export const productSellRouter:Router=Router();

productSellRouter.post("/:id", VerifyProductExists, productSellController.create)

productSellRouter.get("",productSellController.read)