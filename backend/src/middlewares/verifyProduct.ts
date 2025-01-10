import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/app.error";
import { repositoryProduct } from "../interfaces/product.interface";
import Product from "../entities/products.entity";
import { productReadSchema } from "../schemas/product.schema";

export const VerifyProductExists= async (req:Request, res:Response, next:NextFunction):Promise<void>=>{
 
    const id:number= Number(req.params.id)

    const repositoryProduct:repositoryProduct=AppDataSource.getRepository(Product)

    const product:Product | null = await repositoryProduct.findOne({
        where:{id}
        
    })

    if(!product)throw new AppError("Product not found", 404)

    const returnProduct=productReadSchema.parse(product)

    res.locals={...res.locals, returnProduct,product}

    return next()
}