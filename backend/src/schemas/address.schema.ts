import { z } from "zod";

const addressSchema = z.object({
  id: z.number().positive(),
  street: z.string().max(150),
  number: z.string().max(7).nullish(),
  city: z.string().max(150).default('Bom Repouso'),
  neighborhood: z.string().max(100),
});

const addressCreateSchema = addressSchema.omit({ id: true });
const addressUpdateSchema = addressCreateSchema.partial();

export { addressSchema, addressCreateSchema, addressUpdateSchema };