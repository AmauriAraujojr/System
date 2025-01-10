import { z } from "zod";
import { sizeType } from "../entities/pizzaOption.entity";
import { pizzaReadSchema } from "./pizza.schema";

const pizzaOptionSchema = z.object({
  id: z.number().positive(),

  size: z.nativeEnum(sizeType),

  obs: z.string().nullish(),

  halfAndHalf: z.boolean().default(false),

  halfOptions: pizzaReadSchema.nullish(),

  borda:z.object({sabor:z.string(),price:z.string()}),

});

const pizzaOptionCreateSchema = pizzaOptionSchema.omit({ id: true });

const pizzaOptionReadSchema = pizzaOptionSchema.extend({
  pizza: pizzaReadSchema,  price: z.string().max(100),

});

const allpizzaOptionReadSchema = pizzaOptionReadSchema.array();

const pizzaOptionUpdateSchema = pizzaOptionCreateSchema.partial();

export {
  allpizzaOptionReadSchema,
  pizzaOptionSchema,
  pizzaOptionCreateSchema,
  pizzaOptionReadSchema,
  pizzaOptionUpdateSchema,
};
