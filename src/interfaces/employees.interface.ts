import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import Employees from "../entities/employees.entity"
import { allEmployeeReadSchema, employeeCreateSchema, employeeReadSchema } from "../schemas/employees.schema";


type createEmployees = z.infer<typeof employeeCreateSchema>;
type readEmployees = z.infer<typeof employeeReadSchema>;
type updateEmployees = DeepPartial<Employees>;
type allEmployees = z.infer<typeof allEmployeeReadSchema>;
type repositoryEmployees = Repository<Employees>;

export {
  allEmployees,
  createEmployees,
  updateEmployees,
  readEmployees,
  repositoryEmployees,
};
