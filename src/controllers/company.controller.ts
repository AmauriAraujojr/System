import { Request, Response } from "express";
import { readCompany } from "../interfaces/company.interface";
import { companyServices } from "../services";

const create= async (req:Request, res:Response):Promise<Response>=>{
    const company:readCompany= await companyServices.create(req.body)
    return res.status(201).json(company)
}

const update= async (req:Request, res:Response):Promise<Response>=>{
    const company:readCompany= await companyServices.update(req.body,res.locals.company)
    return res.status(200).json(company)
}

export default{create,update}