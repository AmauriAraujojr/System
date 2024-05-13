import { Request, Response } from "express";
import { employeesServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const employee = await employeesServices.create(
      req.body,
      res.locals.company
    );
    return res.status(201).json(employee);
  };

  export default{
    create
  }