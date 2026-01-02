import { Router } from "express";
import { pedidosController } from "../controllers";
import { validateBody } from "../middlewares/validadeBody.middleware";
import { pedidosCreateSchema, pedidosUpdateSchema } from "../schemas/pedidos.schema";
import { VerifyPedidoExists } from "../middlewares/verifyPedidos";


export const pedidosRouter:Router=Router();

pedidosRouter.post("/:name",  validateBody(pedidosCreateSchema), pedidosController.create)

pedidosRouter.get("", pedidosController.read)

pedidosRouter.use("/:id",VerifyPedidoExists)

pedidosRouter.patch("/:id",validateBody(pedidosUpdateSchema), pedidosController.update)

