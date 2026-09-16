import { Router } from "express";
import { controllerStockCreate, controllerStockDestroy, controllerStockRead, controllerStockUpdate } from "./stock.controller";


export const stockProductRouter:Router=Router();

stockProductRouter.post("",controllerStockCreate)
stockProductRouter.get("",controllerStockRead)
stockProductRouter.patch("/:id",controllerStockUpdate)
stockProductRouter.delete("/:id",controllerStockDestroy)


