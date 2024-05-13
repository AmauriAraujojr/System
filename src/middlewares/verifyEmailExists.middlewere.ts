import { NextFunction, Request, Response } from "express";
import { repositoryCompany } from "../interfaces/company.interface";
import { AppDataSource } from "../data-source";
import Company from "../entities/company.entity";
import { AppError } from "../errors/app.error";
import { repositoryEmployees } from "../interfaces/employees.interface";
import Employees from "../entities/employees.entity";

export const VerifyEmailExists = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { email } = req.body;

  if (!email) return next();

  const repository: repositoryCompany = AppDataSource.getRepository(Company);

  const company: Company | null = await repository.findOneBy({ email: email });

  const repositoryEmployee: repositoryEmployees = AppDataSource.getRepository(Employees);

  const employee:Employees| null = await repositoryEmployee.findOneBy({ email: email });

  if (company) throw new AppError("Email already exists", 409);
  if (employee) throw new AppError("Email already exists", 409);


  return next();
};
