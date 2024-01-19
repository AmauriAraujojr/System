import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import Company from "../entities/company.entity";
import { companyCreateSchema, companyReadSchema } from "../schemas/company.schema";

type createCompany= z.infer<typeof companyCreateSchema>;
type readCompany = z.infer<typeof companyReadSchema>;
type updateCompany= DeepPartial<Company>;

type repositoryCompany= Repository<Company>;

export {createCompany, updateCompany, readCompany,repositoryCompany };