import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { allpedidosReadSchema, pedidosCreateSchema, pedidosReadSchema } from "../schemas/pedidos.schema";
import { Pedido } from "../entities/pedidosOn.entity";


type createPedidos= z.infer<typeof pedidosCreateSchema>;
type readPedidos= z.infer<typeof pedidosReadSchema>;
type updatePedidos= DeepPartial<Pedido>;
type allPedidos= z.infer<typeof allpedidosReadSchema>;
type repositoryPedidos= Repository<Pedido>;

export {
  allPedidos,
  createPedidos,
  updatePedidos,
  readPedidos,
  repositoryPedidos,
};