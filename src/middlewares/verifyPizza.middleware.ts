import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/app.error";
import { repositorypizza } from "../interfaces/pizza.interface";
import { Pizza } from "../entities/pizza.entity";
import { pizzaReadSchema } from "../schemas/pizza.schema";

export const VerifyPizzaExists= async (req:Request, res:Response, next:NextFunction):Promise<void>=>{
 
    const id:number= Number(req.params.id)

    const repositoryPizza:repositorypizza=AppDataSource.getRepository(Pizza)

    const pizza:Pizza | null = await repositoryPizza.findOne({
        where:{id}
        
    })

    if(!pizza)throw new AppError("Pizza not found", 404)

    const returnPizza=pizzaReadSchema.parse(pizza)

    res.locals={...res.locals, returnPizza,pizza}

    return next()
}