import { z } from "zod";
import { MeasurementType } from "../entities/products.entity";

const productSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(100),
  quantity: z.string().max(100),
  initialPrice:z.string().max(100).nullish(),
  price: z.string().max(100),
  category:z.string().max(100),
  supplier: z.string().max(200).nullish(),
  unitOfMeasurement: z
    .nativeEnum(MeasurementType)
    .default(MeasurementType.UNIDADE),
  img:z.string().nullish()
});

const productCreateSchema = productSchema.omit({ id: true });

const productReadSchema = productSchema

const allProductReadSchema = productReadSchema.array();

const productUpdateSchema = productCreateSchema.partial();

export {
  allProductReadSchema,
  productSchema,
  productCreateSchema,
  productReadSchema,
  productUpdateSchema,
};
