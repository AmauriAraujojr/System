import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import Product from "../entities/products.entity"
import { allProductReadSchema, productCreateSchema, productReadSchema } from "../schemas/product.schema";


type createProduct= z.infer<typeof productCreateSchema>;
type readProduct= z.infer<typeof productReadSchema>;
type updateProduct= DeepPartial<Product>;
type allProduct= z.infer<typeof allProductReadSchema>;
type repositoryProduct= Repository<Product>;

export {
  allProduct,
  createProduct,
  updateProduct,
  readProduct,
  repositoryProduct,
};
