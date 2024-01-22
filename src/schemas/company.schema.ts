import { z } from "zod";

const companySchema = z.object({
  id: z.number().positive(),
  corporateReason: z.string().max(100),
  fantasyName: z.string().max(100),
  cnpj: z.string().max(15),
  phoneNumber: z.string().max(100),
  email: z.string().max(50).email(),
  password: z.string().max(20),
});

const companyCreateSchema = companySchema.omit({ id: true });

const companyReadSchema = companySchema.omit({ password: true });

const allcompanyReadSchema = companyReadSchema.array();

const companyUpdateSchema = companyCreateSchema.partial();

export {
  allcompanyReadSchema,
  companySchema,
  companyCreateSchema,
  companyReadSchema,
  companyUpdateSchema,
};
