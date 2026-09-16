import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { StockProduct } from "./stock.entity";
import { create_Stock_products_schema, read_all_stock_products_schema, read_stock_product_schema } from "./stock.schema";

type createProduct= z.infer<typeof create_Stock_products_schema>;
type readProduct= z.infer<typeof read_stock_product_schema>;
type updateProduct= DeepPartial<StockProduct>;
type allProduct= z.infer<typeof read_all_stock_products_schema>;
type repositoryProduct= Repository<StockProduct>;

export {
  allProduct,
  createProduct,
  updateProduct,
  readProduct,
  repositoryProduct,
};