import { z } from "zod";
import { StockMovementType } from "./stock-moviments.entity";
import { create_Stock_products_schema, read_stock_product_schema } from "../stock-products/stock.schema";

const stock_moviments_schema = z.object({
    id: z.string().uuid(),
    type: z.nativeEnum(StockMovementType),
    quantity: z.coerce.number().positive(),
    unitCost: z.coerce.number().positive().nullish(),
    reason: z.string().max(255),
    createdAt: z.date(),

})

const create_Stock_moviments_schema = stock_moviments_schema.omit({ id: true, createdAt: true }).extend({product:create_Stock_products_schema});

const read_stock_moviments_schema = stock_moviments_schema.extend({product:read_stock_product_schema})

const read_all_stock_moviments_schema = read_stock_moviments_schema.array();

const update_stock_moviments_schema = create_Stock_moviments_schema.partial();

export {
    create_Stock_moviments_schema,
    read_stock_moviments_schema,
    read_all_stock_moviments_schema,
    update_stock_moviments_schema
};