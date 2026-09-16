import { z } from "zod";
import { StockMovement } from "./stock-moviments.entity";
import { DeepPartial, Repository } from "typeorm";
import { create_Stock_moviments_schema, read_all_stock_moviments_schema, read_stock_moviments_schema } from "./stock-moviments.schema";

type createMoviments= z.infer<typeof create_Stock_moviments_schema>;
type readMoviments= z.infer<typeof read_stock_moviments_schema>;
type updateMoviments= DeepPartial<StockMovement>;
type allMoviments= z.infer<typeof read_all_stock_moviments_schema>;
type repositoryMoviments= Repository<StockMovement>;

export {
  allMoviments,
  createMoviments,
  updateMoviments,
  readMoviments,
  repositoryMoviments,
};