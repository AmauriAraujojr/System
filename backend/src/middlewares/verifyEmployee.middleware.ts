import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/app.error";
import Employees from "../entities/employees.entity";
import { repositoryEmployees } from "../interfaces/employees.interface";
import { employeeReadSchema } from "../schemas/employees.schema";

export const VerifyEmployeeExists= async (req:Request, res:Response, next:NextFunction):Promise<void>=>{
 
    const id:number= Number(req.params.id)

    const repositoryEmployee:repositoryEmployees=AppDataSource.getRepository(Employees)

    const employee:Employees | null = await repositoryEmployee.findOne({
        where:{id}
        
    })

    if(!employee)throw new AppError("Employee not found", 404)

    const returnEmployee=employeeReadSchema.parse(employee)

    res.locals={...res.locals, returnEmployee,employee}

    return next()
}