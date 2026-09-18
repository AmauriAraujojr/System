import { AppDataSource } from "../../../database/data-source";
import { StockProduct } from "./stock.entity";
import { allProduct, createProduct, readProduct, repositoryProduct, updateProduct } from "./stock.interface";
import { read_all_stock_products_schema, read_stock_product_schema } from "./stock.schema";
import { AppError } from "../../../errors/app.error";

const stockServiceCreate = async (
  payload: createProduct
): Promise<readProduct> => {
  const productRepository: repositoryProduct =
    AppDataSource.getRepository(StockProduct);

  const product: StockProduct = productRepository.create({
    ...payload,
  });

  await productRepository.save(product);

  return read_stock_product_schema.parse(product);
};

const stockServiceRead = async (): Promise<allProduct> => {
  const repository: repositoryProduct = AppDataSource.getRepository(StockProduct);

  const products = await repository.find({

    order: { id: 1 },
  });


  return read_all_stock_products_schema.parse(products);
};

const stockServiceUpdate = async (
  payload: updateProduct,
  id: string

): Promise<readProduct> => {
  const repository: repositoryProduct = AppDataSource.getRepository(StockProduct);

  const product: StockProduct | null = await repository.findOne({
    where: { id }

  })

  if (!product) throw new AppError("Product not found", 404)

  const updProduct: StockProduct = repository.create({
    ...product,
    ...payload,
  });

  const productUp = await repository.save(updProduct);

  return read_stock_product_schema.parse(productUp);
};

const stockServiceDestroy = async (id: string,
): Promise<void> => {
  const repository: repositoryProduct = AppDataSource.getRepository(StockProduct);
  const product: StockProduct | null = await repository.findOne({
    where: { id }

  })

  if (!product) throw new AppError("Product not found", 404)

  await repository.remove(product);
};

export { stockServiceCreate, stockServiceRead, stockServiceUpdate, stockServiceDestroy };