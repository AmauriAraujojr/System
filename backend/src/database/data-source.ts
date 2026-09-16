import "reflect-metadata";
import "dotenv/config";

import { DataSource } from "typeorm";
import { StockProduct } from "../modules/stock/stock-products/stock.entity";
import { StockMovement } from "../modules/stock/stock-moviments/stock-moviments.entity";

export const AppDataSource = new DataSource({
  type: "postgres",

  url: process.env.DATABASE_URL!,

  synchronize: false,

  logging: true,
  
  entities: [StockProduct,StockMovement],

  migrations: ["src/database/migrations/*.ts"],
});