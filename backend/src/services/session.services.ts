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

const create = async (payload: login): Promise<sessionReturn> => {

  const validate = sessionSchema.parse(payload);
  const { email } = validate;

  const companyRepository: repositoryCompany =
    AppDataSource.getRepository(Company);
  const employeeRepository: repositoryEmployees =
    AppDataSource.getRepository(Employees);

  const company: Company | null = await companyRepository.findOne({
    where: { email: email },
  });
  const employee: Employees | null = await employeeRepository.findOne({
    where: { email: email },
  });

  let user = null;
  let userType = null;

  if (company && !employee) {
    user = company;
    userType = "admin";
  } else if (employee && !company) {
    user = employee;
    userType = employee.id.toString();
  }

  if (user && userType) {
    const isValidPassword = await compare(payload.password, user.password);
    if (!isValidPassword) throw new AppError("Invalid Credentials", 401);

    const token = sign({ id: user.id, role: userType }, process.env.SECRET_KEY!, {
      subject: user.id.toString(),
      expiresIn: process.env.EXPIRES_IN!,
    });

    return { token };
  } else {
    throw new AppError("Invalid Credentials", 401);
  }
};

export default { create };
