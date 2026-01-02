import { z } from "zod";
import { statusType } from "../entities/pedidosOn.entity";
import { clientCreateSchema } from "./client.schema";
import { pizzaOptionReadSchema } from "./pizzaOption.schema";
import { companyReadSchema } from "./company.schema";
import { productSellReadSchema } from "./productSell.schema";


const pedidosSchema = z.object({
  id: z.number().positive(),
  status: z.nativeEnum(statusType).default(statusType.PENDENTE),
  type: z.nativeEnum(statusType).default(statusType.RETIRADA),
  taxa: z.string().max(19).nullish(),
  index: z.string().max(7).nullish(),
  products: productSellReadSchema.array(),
  pizzaOption: pizzaOptionReadSchema.array()
});

const pedidosCreateSchema = pedidosSchema.omit({ id: true }).extend({client:clientCreateSchema});
const pedidosUpdateSchema = pedidosCreateSchema.partial();
const pedidosReadSchema = pedidosSchema
.extend({ createdAt:z.date(),
  updatedAt:z.date(), client:clientCreateSchema, company:companyReadSchema})
const allpedidosReadSchema = pedidosReadSchema.array();

export { pedidosSchema, pedidosCreateSchema, pedidosUpdateSchema ,pedidosReadSchema, allpedidosReadSchema};
