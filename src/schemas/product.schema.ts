import { z } from "zod";
import { MeasurementType } from "../entities/products.entity";
import { companyReadSchema, companySchema } from "./company.schema";

const productSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(100),
  quantity: z.number(),
  price: z.number(),
  supplier: z.string().max(200).nullish(),
  unitOfMeasurement: z
    .nativeEnum(MeasurementType)
    .default(MeasurementType.UNIDADE),
});

const productCreateSchema = productSchema.omit({ id: true });

const productReadSchema = productSchema

// .extend({
//   company: companyReadSchema.omit({
//     employees: true,
//     fantasyName: true,
//     corporateReason: true,
//     email: true,
//     phoneNumber: true,
//     cnpj: true,
//   }),
  
// });

const allProductReadSchema = productReadSchema.array();

const productUpdateSchema = productCreateSchema.partial();

export {
  allProductReadSchema,
  productSchema,
  productCreateSchema,
  productReadSchema,
  productUpdateSchema,
};
