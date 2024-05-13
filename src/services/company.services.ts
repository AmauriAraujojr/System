import { AppDataSource } from "../data-source";
import Company from "../entities/company.entity";
import {
  allCompany,
  createCompany,
  readCompany,
  repositoryCompany,
  updateCompany,
} from "../interfaces/company.interface";
import {
  allcompanyReadSchema,
  companyReadSchema,
} from "../schemas/company.schema";

const create = async (payload: createCompany): Promise<readCompany> => {
  const companyRepository: repositoryCompany =
    AppDataSource.getRepository(Company);

  const company: Company = companyRepository.create({
    ...payload, employees:[]
    
  });

  await companyRepository.save(company);

  return companyReadSchema.parse(company);
};

const read = async (): Promise<allCompany> => {
  const repository: repositoryCompany = AppDataSource.getRepository(Company);

  const companies = await repository.find({
    relations:{
      employees:true
    }
  })
  ;


  return allcompanyReadSchema.parse(companies);
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

const destroy = async (company: Company): Promise<void> => {
  const repository: repositoryCompany = AppDataSource.getRepository(Company);

  await repository.remove(company);
};

export default {
  create,
  read,
  update,
  destroy,
};
