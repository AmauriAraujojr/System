import { AppDataSource } from "../data-source";
import Company from "../entities/company.entity";
import {
  createCompany,
  readCompany,
  repositoryCompany,
} from "../interfaces/company.interface";
import { companyReadSchema } from "../schemas/company.schema";

const create = async (payload: createCompany): Promise<readCompany> => {
  const companyRepository: repositoryCompany =
    AppDataSource.getRepository(Company);

  const company: Company = companyRepository.create({
    ...payload,
  });

  await companyRepository.save(company);

  return companyReadSchema.parse(company);
};

export default {
  create,
};
