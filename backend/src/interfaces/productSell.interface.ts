import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { ProductSell } from "../entities/product_sell.entity";
import { allproductSellReadSchema, productSellCreateSchema, productSellReadSchema } from "../schemas/productSell.schema";


type createproductSell= z.infer<typeof productSellCreateSchema>;
type readproductSell= z.infer<typeof productSellReadSchema>;
type updateproductSell= DeepPartial<ProductSell>;
type allproductSell= z.infer<typeof allproductSellReadSchema>;
type repositoryproductSell= Repository<ProductSell>;

export {
  allproductSell,
  createproductSell,
  updateproductSell,
  readproductSell,
  repositoryproductSell,
};
