import { NextFunction, Request, Response } from "express";
import { repositoryCompany } from "../interfaces/company.interface";
import { AppDataSource } from "../data-source";
import Company from "../entities/company.entity";
import { AppError } from "../errors/app.error";
import { repositoryEmployees } from "../interfaces/employees.interface";
import Employees from "../entities/employees.entity";
import { repositoryClient } from "../interfaces/client.interface";
import Client from "../entities/client.entity";

export const VerifyFantasyNameExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { fantasyName} = req.body;

  if (!fantasyName) return next();

  const repository: repositoryCompany = AppDataSource.getRepository(Company);

  const company: Company | null = await repository.findOneBy({ fantasyName: fantasyName});

 
  if (company) throw new AppError("fantasyNamea all ready exists", 409);



  return next();
};
