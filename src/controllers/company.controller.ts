import { Request, Response } from "express";
import { readCompany } from "../interfaces/company.interface";
import { companyServices } from "../services";

const create= async (req:Request, res:Response):Promise<Response>=>{
    const company:readCompany= await companyServices.create(req.body)
    return res.status(201).json(company)
}

export default{create}