import { NextFunction, Request, Response } from "express";
import { repositoryCompany } from "../interfaces/company.interface";
import { AppDataSource } from "../data-source";
import Company from "../entities/company.entity";
import { AppError } from "../errors/app.error";
import { companyReadSchema } from "../schemas/company.schema";

export const VerifyEntitieExists= async (req:Request, res:Response, next:NextFunction):Promise<void>=>{
 
  let id:number= Number(req.params.id)

    const companys=res.locals.decoded


    if(!req.params.id) id=Number(companys.id)


    const repositoryCompany:repositoryCompany=AppDataSource.getRepository(Company)

    const company:Company | null = await repositoryCompany.findOne({
        where:{id},
       
    })

    if(!company)throw new AppError("Company not found", 404)

    const returnCompany=companyReadSchema.parse(company)

    res.locals={...res.locals, returnCompany,company}

    return next()
}