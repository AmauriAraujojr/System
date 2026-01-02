import { AppDataSource } from "../data-source";
import Company from "../entities/company.entity";
import Product from "../entities/products.entity";
import {
  allProduct,
  createProduct,
  readProduct,
  repositoryProduct,
  updateProduct,
} from "../interfaces/product.interface";
import {
  allProductReadSchema,
  productReadSchema,
} from "../schemas/product.schema";

const create = async (
  payload: createProduct,
  company: Company
): Promise<readProduct> => {
  const productRepository: repositoryProduct =
    AppDataSource.getRepository(Product);


   let initPrice = Number(payload.initialPrice) / Number(payload.quantity)
  
    let initPrice2 = Math.round(initPrice * 100) / 100;

    payload.initialPrice= String(initPrice2)

  

  const product: Product = productRepository.create({
    ...payload,
    company: company,
  });

  await productRepository.save(product);

  return productReadSchema.parse(product);
};

const read = async (): Promise<allProduct> => {
  const repository: repositoryProduct = AppDataSource.getRepository(Product);

  const products = await repository.find({
  
    order: { id: 1 },
  });
  return allProductReadSchema.parse(products);
};

const update = async (
  payload: updateProduct,
  product: Product,

): Promise<readProduct> => {
  const repository: repositoryProduct = AppDataSource.getRepository(Product);

  // if (payload.quantity) {
  //   payload.quantity = payload.quantity + product.quantity;
  // }

  const updProduct: Product = repository.create({
    ...product,
    ...payload,
  });

  const productUp = await repository.save(updProduct);

  return productReadSchema.parse(productUp);
};

const destroy = async (product: Product,  
): Promise<void> => {
  const repository: repositoryProduct = AppDataSource.getRepository(Product);

  await repository.remove(product);
};

export default { create, read, update, destroy };
