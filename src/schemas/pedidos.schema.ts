import { z } from "zod";
import { productReadSchema } from "./product.schema";
import { statusType } from "../entities/pedidosOn.entity";
import { clientCreateSchema, clientReadSchema, clientSchema } from "./client.schema";
import { pizzaOptionReadSchema } from "./pizzaOption.schema";


const pedidosSchema = z.object({
  id: z.number().positive(),
  status: z.nativeEnum(statusType).default(statusType.PENDENTE),
  type: z.nativeEnum(statusType).default(statusType.RETIRADA),
  products: productReadSchema.array(),
  pizzaOption: pizzaOptionReadSchema.array(),
  taxa: z.string().max(19).nullish(),
  index: z.string().max(7).nullish()


});

const pedidosCreateSchema = pedidosSchema.omit({ id: true }).extend({client:clientCreateSchema});
const pedidosUpdateSchema = pedidosCreateSchema.partial();
const pedidosReadSchema = pedidosSchema
.extend({ createdAt:z.date(),
  updatedAt:z.date(), client:clientCreateSchema})
const allpedidosReadSchema = pedidosReadSchema.array();

export { pedidosSchema, pedidosCreateSchema, pedidosUpdateSchema ,pedidosReadSchema, allpedidosReadSchema};
