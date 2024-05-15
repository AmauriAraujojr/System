import { z } from "zod";
import { employeeReadSchema} from "./employees.schema";

const companySchema = z.object({
  id: z.number().positive(),
  corporateReason: z.string().max(100),
  fantasyName: z.string().max(100),
  cnpj: z.string().max(15),
  phoneNumber: z.string().max(100),
  email: z.string().max(50).email(),
  password: z.string().max(200),
  
});

const companyCreateSchema = companySchema.omit({ id: true });

const companyReadSchema = companySchema
  .omit({ password: true })
  .extend({ employees: z.array(employeeReadSchema)});

const allcompanyReadSchema = companyReadSchema.array();

const companyUpdateSchema = companyCreateSchema.partial();

export {
  allcompanyReadSchema,
  companySchema,
  companyCreateSchema,
  companyReadSchema,
  companyUpdateSchema,
};
