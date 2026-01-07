import { z } from "zod";

const categorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(100),
  description: z.string().nullish(),
  img:z.string().nullish()
});

const categoryCreateSchema = categorySchema.omit({ id: true });

const categoryReadSchema = categorySchema

const allcategoryReadSchema = categoryReadSchema.array();

const categoryUpdateSchema = categoryCreateSchema.partial();

export {
  allcategoryReadSchema,
  categorySchema,
  categoryCreateSchema,
  categoryReadSchema,
  categoryUpdateSchema,
};
