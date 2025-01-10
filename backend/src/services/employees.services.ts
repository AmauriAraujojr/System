import { AppDataSource } from "../data-source";
import Company from "../entities/company.entity";
import Employees from "../entities/employees.entity";
import {
  allEmployees,
  createEmployees,
  readEmployees,
  repositoryEmployees,
  updateEmployees,
} from "../interfaces/employees.interface";
import {
  allEmployeeReadSchema,
  employeeReadSchema,
} from "../schemas/employees.schema";

const create = async (
  payload: createEmployees,
  company: Company
): Promise<readEmployees> => {
  const employeeRepository: repositoryEmployees =
    AppDataSource.getRepository(Employees);

  const employee: Employees = employeeRepository.create({
    ...payload,
    company: company,
  });

  await employeeRepository.save(employee);

  return employeeReadSchema.parse(employee);
};

const read = async (): Promise<allEmployees> => {
  const repository: repositoryEmployees =
    AppDataSource.getRepository(Employees);

  const employees = await repository.find({ order: { id: 1 } });
  return allEmployeeReadSchema.parse(employees);
};

const update = async (
  payload: updateEmployees,
  employee: Employees
): Promise<readEmployees> => {
  const repository: repositoryEmployees =
    AppDataSource.getRepository(Employees);

  const updemployee: Employees = repository.create({
    ...employee,
    ...payload,
  });

  const employeesUp = await repository.save(updemployee);

  return employeeReadSchema.parse(employeesUp);
};

const destroy = async (employee: Employees): Promise<void> => {
  const repository: repositoryEmployees =
    AppDataSource.getRepository(Employees);

  await repository.remove(employee);
};

export default { create, read, update, destroy };
