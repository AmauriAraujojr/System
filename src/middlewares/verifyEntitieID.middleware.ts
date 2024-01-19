import { NextFunction, Request, Response } from "express";
import { repositoryCompany } from "../interfaces/company.interface";
import { AppDataSource } from "../data-source";
import Company from "../entities/company.entity";
import { AppError } from "../errors/app.error";

export const VerifyEntitieExists= async (req:Request, res:Response, next:NextFunction):Promise<void>=>{
 
    const id:number= Number(req.params.id)

    const repositoryCompany:repositoryCompany=AppDataSource.getRepository(Company)

    const company:Company | null = await repositoryCompany.findOne({
        where:{id}
    })

    if(!company)throw new AppError("Company not found", 404)

    res.locals={...res.locals,company}

    return next()
}