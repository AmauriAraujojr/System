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

  let token: string = "";

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

  if (!company && !employee) throw new AppError("Invalid Credentials", 401);

  if (company && !employee) {
    const samePassword: boolean = await compare(
      payload.password,
      company.password
    );

    if (!samePassword) throw new AppError("Invalid Credentials", 401);

    token = sign({ company: company }, process.env.SECRET_KEY!, {
      subject: "admin",
      expiresIn: process.env.EXPIRES_IN!,
    });
  }

  if (employee && !company) {
    const otherPassword: boolean = await compare(
      payload.password,
      employee.password
    );

    if (!otherPassword) throw new AppError("Invalid Credentials", 401);

    token = sign({ employee: employee }, process.env.SECRET_KEY!, {
      subject: employee.id.toString(),
      expiresIn: process.env.EXPIRES_IN!,
    });
  }
  return { token };
};

export default { create };
