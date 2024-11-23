import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/app.error";
import { repositoryProduct } from "../interfaces/product.interface";
import Product from "../entities/products.entity";
import { productReadSchema } from "../schemas/product.schema";
import { repositoryPedidos } from "../interfaces/pedidos.interface";
import { Pedido } from "../entities/pedidosOn.entity";
import { pedidosReadSchema } from "../schemas/pedidos.schema";

export const VerifyPedidoExists= async (req:Request, res:Response, next:NextFunction):Promise<void>=>{
 
    const id:number= Number(req.params.id)

    const repositoryPedidos:repositoryPedidos=AppDataSource.getRepository(Pedido)

    const pedido:Pedido | null = await repositoryPedidos.findOne({
        where:{id}
        
    })

    if(!pedido)throw new AppError("Pedido not found", 404)

    const returnPedido=pedidosReadSchema.parse(pedido)

    res.locals={...res.locals, returnPedido, pedido}

    return next()
}