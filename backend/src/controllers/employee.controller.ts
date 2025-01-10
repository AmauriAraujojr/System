import { Request, Response } from "express";
import { employeesServices } from "../services";
import { allEmployees, readEmployees } from "../interfaces/employees.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
    const employee = await employeesServices.create(
      req.body,
      res.locals.returnCompany
    );
    return res.status(201).json(employee);
  };

  const read = async (req: Request, res: Response): Promise<Response> => {
    const employees: allEmployees= await employeesServices.read();
    return res.status(200).json(employees);
  };

  const update = async (req: Request, res: Response): Promise<Response> => {
    const employee: readEmployees = await employeesServices.update(
      req.body,
      res.locals.employee
    );
    return res.status(200).json(employee);
  };

  const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const employee: readEmployees = await res.locals.returnEmployee;
    return res.status(200).json(employee);
  };

  const destroy = async (req: Request, res: Response): Promise<Response> => {
    await employeesServices.destroy(res.locals.employee);
    return res.status(204).json();
  };


  export default{
    create,read,update, retrieve,destroy
  }