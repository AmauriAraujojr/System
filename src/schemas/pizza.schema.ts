import { z } from "zod";

const pizzaSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(100),
  price_G: z.string().max(100),
  price_M: z.string().max(100),
  price_P: z.string().max(100),
  description:z.string().nullish(),
  img:z.string().nullish()

});

const pizzaCreateSchema = pizzaSchema.omit({ id: true });

const pizzaReadSchema = pizzaSchema

const allpizzaReadSchema = pizzaReadSchema.array();

const pizzaUpdateSchema = pizzaCreateSchema.partial();

export {
  allpizzaReadSchema,
  pizzaSchema,
  pizzaCreateSchema,
  pizzaReadSchema,
  pizzaUpdateSchema,
};
