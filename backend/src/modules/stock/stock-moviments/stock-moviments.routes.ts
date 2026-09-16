import { Router } from "express";
import { controllerMovimentCreate, controllerMovimentRead } from "./stock-moviment.controller";


export const stockMovimentsRouter:Router=Router();

stockMovimentsRouter.post("/:id", controllerMovimentCreate)
stockMovimentsRouter.get("", controllerMovimentRead)