import { AppDataSource } from "../../../database/data-source";
import { AppError } from "../../../errors/app.error";
import { StockProduct } from "../stock-products/stock.entity";
import { repositoryProduct } from "../stock-products/stock.interface";
import { allMoviments, createMoviments, readMoviments, repositoryMoviments } from "./stock-moviment.interface";
import { StockMovement } from "./stock-moviments.entity";
import { read_all_stock_moviments_schema, read_stock_moviments_schema } from "./stock-moviments.schema";

const movimentServiceCreate = async (
  payload: createMoviments,
  id: string
): Promise<readMoviments> => {
  const movimentRepository: repositoryMoviments =
    AppDataSource.getRepository(StockMovement);

  const productRepository: repositoryProduct = AppDataSource.getRepository(StockProduct)

  const product: StockProduct | null = await productRepository.findOne({
    where: { id }



  })

  if (!product) throw new AppError("Product not found", 404)

  if (payload.type === "IN") {
    product.currentStock =
      Number(product.currentStock) + Number(payload.quantity);
      product.costPrice = payload.unitCost!
  }

  if (payload.type === "OUT") {

    if(Number(product.currentStock)-Number(payload.quantity) < 0 ){
  throw new AppError("Insufficient stock", 409);
    }

    product.currentStock =
      Number(product.currentStock) - Number(payload.quantity);
  }

  if(payload.type === "ADJUSTMENT") {
    product.currentStock = Number(payload.quantity)
  }

  await productRepository.save(product);

  const moviment: StockMovement = movimentRepository.create({
    ...payload,
    product
  });

  await movimentRepository.save(moviment);

  return read_stock_moviments_schema.parse(moviment);
};

const movimentServiceRead = async (): Promise<allMoviments> => {
  const repository: repositoryMoviments = AppDataSource.getRepository(StockMovement);

  const moviments = await repository.find({
    relations: { product: true },

    order: { id: 1 },
  });

  return read_all_stock_moviments_schema.parse(moviments);
};

export { movimentServiceCreate, movimentServiceRead }