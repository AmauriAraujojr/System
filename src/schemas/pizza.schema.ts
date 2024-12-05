import { z } from "zod";
import { companyReadSchema } from "./company.schema";

const pizzaSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(100),
  price_G: z.string().max(100),
  price_M: z.string().max(100),
  price_P: z.string().max(100),
  description:z.string().nullish(),
  img:z.string().nullish(),
  borda:z.object({sabor:z.string(),price:z.string()}).array()

});

const pizzaCreateSchema = pizzaSchema.omit({ id: true });

const pizzaReadSchema = pizzaSchema.extend({company:companyReadSchema})

const allpizzaReadSchema = pizzaReadSchema.array();

const pizzaUpdateSchema = pizzaCreateSchema.partial();

export {
  allpizzaReadSchema,
  pizzaSchema,
  pizzaCreateSchema,
  pizzaReadSchema,
  pizzaUpdateSchema,
};
