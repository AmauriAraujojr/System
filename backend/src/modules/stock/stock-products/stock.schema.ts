import { z } from "zod";

const stock_products_schema = z.object({
    id: z.string().uuid(),
    name: z.string().max(100),
    unit: z.enum(["kg","g","un","l","ml"]),
    currentStock:z.coerce.number().min(0).default(0),
    minimumStock: z.coerce.number().min(0),
    yieldRate: z.coerce.number().min(0).max(10),
    active: z.boolean().default(true),
    createdAt: z.date(),
    updatedAt: z.date(),
    costPrice: z.coerce.number().min(0),


});

const create_Stock_products_schema = stock_products_schema.omit({ id: true,createdAt:true,updatedAt:true,currentStock:true});

const read_stock_product_schema = stock_products_schema

const read_all_stock_products_schema = read_stock_product_schema.array();

const update_stock_product_schema = create_Stock_products_schema.partial();

export {
    create_Stock_products_schema,
    read_stock_product_schema,
    read_all_stock_products_schema,
    update_stock_product_schema
};