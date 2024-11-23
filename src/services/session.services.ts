import { compare } from "bcryptjs";
import { AppDataSource } from "../data-source";
import Company from "../entities/company.entity";
import { AppError } from "../errors/app.error";
import { repositoryCompany } from "../interfaces/company.interface";
import { login, sessionReturn } from "../interfaces/session.interface";
import { sessionSchema } from "../schemas/session.schema";
import { sign } from "jsonwebtoken";
import Employees from "../entities/employees.entity";
import { repositoryEmployees } from "../interfaces/employees.interface";
import { repositoryClient } from "../interfaces/client.interface";
import Client from "../entities/client.entity";

const create = async (payload: login): Promise<sessionReturn> => {
  const validate = sessionSchema.parse(payload);
  const { email } = validate;

  let token: string = "3";

  const companyRepository: repositoryCompany =
    AppDataSource.getRepository(Company);

  const employeeRepository: repositoryEmployees =
    AppDataSource.getRepository(Employees);

  const clientRepository: repositoryClient =
    AppDataSource.getRepository(Client);

  const company: Company | null = await companyRepository.findOne({
    where: { email: email },
    relations:{
      employees:true,
      products:true,
      pedidos:{client:{address:true},products:true,pizzaOption:{pizza:true}}
    }  });

  const employee: Employees | null = await employeeRepository.findOne({
    where: { email: email },
  });


  let user = null;
  let userType = null;

  if (company && !employee ) {
    user = company;
    userType = "admin";
  } else if (employee && !company ) {
    user = employee;
    userType = employee.id.toString();
  } 

  if (user) {
    const isValidPassword = await compare(payload.password, user.password);
    if (!isValidPassword) throw new AppError("Invalid Credentials", 401);

    token = sign({ userType: user }, process.env.SECRET_KEY!, {
      subject: userType!,
      expiresIn: process.env.EXPIRES_IN!,
    });
  } else {
    throw new AppError("Invalid Credentials", 401);
  }

  return { token };
};

export default { create };
