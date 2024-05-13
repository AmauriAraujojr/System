import { AppDataSource } from "../data-source";
import Company from "../entities/company.entity";
import Employees from "../entities/employees.entity";
import { createEmployees, readEmployees, repositoryEmployees } from "../interfaces/employees.interface";
import { employeeReadSchema } from "../schemas/employees.schema";

const create = async (payload: createEmployees, company:Company): Promise<readEmployees> => {
  const employeeRepository: repositoryEmployees =
    AppDataSource.getRepository(Employees);

  const employee: Employees = employeeRepository.create({
    ...payload, company:company
  });

  await employeeRepository.save(employee);

  return employeeReadSchema.parse(employee);
};

export default{create}