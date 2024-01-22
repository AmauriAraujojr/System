import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import Company from "../entities/company.entity";
import {
  allcompanyReadSchema,
  companyCreateSchema,
  companyReadSchema,
} from "../schemas/company.schema";

type createCompany = z.infer<typeof companyCreateSchema>;
type readCompany = z.infer<typeof companyReadSchema>;
type updateCompany = DeepPartial<Company>;
type allCompany = z.infer<typeof allcompanyReadSchema>;

type repositoryCompany = Repository<Company>;

export {
  allCompany,
  createCompany,
  updateCompany,
  readCompany,
  repositoryCompany,
};
