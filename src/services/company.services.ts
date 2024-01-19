import { AppDataSource } from "../data-source";
import Company from "../entities/company.entity";
import {
  createCompany,
  readCompany,
  repositoryCompany,
  updateCompany,
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

const update = async (
  payload: updateCompany,
  company: Company
): Promise<readCompany> => {
  const repository: repositoryCompany = AppDataSource.getRepository(Company);

  const updCompany: Company = repository.create({
    ...company,
    ...payload,
  });

  const companyUp = await repository.save(updCompany);

  return companyReadSchema.parse(companyUp);
};

export default {
  create,
  update,
};
