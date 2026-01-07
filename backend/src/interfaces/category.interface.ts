import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import Category from "../entities/categorys";
import { allcategoryReadSchema, categoryCreateSchema, categoryReadSchema } from "../schemas/category.schema";


type createCategory= z.infer<typeof categoryCreateSchema>;
type readCategory= z.infer<typeof categoryReadSchema>;
type updateCategory= DeepPartial<Category>;
type allCategory= z.infer<typeof allcategoryReadSchema>;
type repositoryCategory= Repository<Category>;

export {
  allCategory,
  createCategory,
  updateCategory,
  readCategory,
  repositoryCategory,
};
