import { AppDataSource } from "../data-source";
import { ProductSell } from "../entities/product_sell.entity";
import Product from "../entities/products.entity";
import { allproductSell, readproductSell, repositoryproductSell } from "../interfaces/productSell.interface";
import { allproductSellReadSchema, productSellReadSchema } from "../schemas/productSell.schema";

const create =async(product:Product):Promise<readproductSell>=>{


const repo:repositoryproductSell= AppDataSource.getTreeRepository(ProductSell)


const productSell:ProductSell=repo.create({
    product:product,
    price: product.price
})

await repo.save(productSell)

return productSellReadSchema.parse(productSell)
}

const read = async (): Promise<allproductSell> => {
    const repository: repositoryproductSell =
      AppDataSource.getRepository(ProductSell);
  
    const products = await repository.find({
      order: { id: 1 },
      relations: { product: true },
    });
    return allproductSellReadSchema.parse(products);
  };
export default{create , read}