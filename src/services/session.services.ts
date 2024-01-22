import { compare } from "bcryptjs";
import { AppDataSource } from "../data-source";
import Company from "../entities/company.entity";
import { AppError } from "../errors/app.error";
import { repositoryCompany } from "../interfaces/company.interface";
import { login, sessionReturn } from "../interfaces/session.interface";
import { sessionSchema } from "../schemas/session.schema";
import { sign } from "jsonwebtoken";

const create = async (payload: login): Promise<sessionReturn> => {
  const validate = sessionSchema.parse(payload);
  const { email } = validate;

  const repository: repositoryCompany = AppDataSource.getRepository(Company);

  const company: Company | null = await repository.findOne({
    where: { email: email },
  });

  if (!company) throw new AppError("Invalid Credentials", 401);

  const samePassword: boolean = await compare(
    payload.password,
    company.password
  );

  if (!samePassword) throw new AppError("Invalid Credentials", 401);

  const token: string = sign({ company: company }, process.env.SECRET_KEY!, {
    subject: company.id.toString(),
    expiresIn: process.env.EXPIRES_IN!,
  });

  return { token };
};

export default { create };
