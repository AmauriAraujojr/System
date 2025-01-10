import { z } from "zod";
import { EmployeeType } from "../entities/employees.entity";

const employeeSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(100),
  phoneNumber: z.string().max(100),
  email: z.string().max(50).email(),
  password: z.string().max(200),
  job: z.nativeEnum(EmployeeType).default(EmployeeType.GARÇON),
});

const employeeCreateSchema = employeeSchema.omit({ id: true });

const employeeReadSchema = employeeSchema.omit({ password: true });

const allEmployeeReadSchema = employeeReadSchema.array();

const employeeUpdateSchema = employeeCreateSchema.partial();



export {
  allEmployeeReadSchema,
  employeeSchema,
  employeeCreateSchema,
  employeeReadSchema,
  employeeUpdateSchema,
};
