import { z } from "zod";
import { productReadSchema } from "./product.schema";

const productSellSchema = z.object({
  id: z.number().positive(),

  price: z.string().max(100),


});

const productSellCreateSchema = productSellSchema.omit({ id: true });

const productSellReadSchema = productSellSchema.extend({
  product: productReadSchema,
});

const allproductSellReadSchema = productSellReadSchema.array();

const productSellUpdateSchema = productSellCreateSchema.partial();

export {
  allproductSellReadSchema,
  productSellSchema,
  productSellCreateSchema,
  productSellReadSchema,
  productSellUpdateSchema,
};
