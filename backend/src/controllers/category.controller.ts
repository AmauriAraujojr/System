import { Request, Response } from "express";
import { allCategory, readCategory } from "../interfaces/category.interface";
import { categoryServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const category = await categoryServices.create(
      req.body,
      res.locals.returnCompany
    );
    return res.status(201).json(category);
  };

  const read = async (req: Request, res: Response): Promise<Response> => {
    const categorys: allCategory= await categoryServices.read();
    return res.status(200).json(categorys);
  };

  const update = async (req: Request, res: Response): Promise<Response> => {
    const category: readCategory = await categoryServices.update(
      req.body,
      res.locals.returnCategory,

    );
    return res.status(200).json(category);
  };

  const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const category: readCategory= await res.locals.returnCategory;
    return res.status(200).json(category);
  };

  const destroy = async (req: Request, res: Response): Promise<Response> => {
    await categoryServices.destroy(res.locals.category,
    );
    return res.status(204).json();
  };

  export default{create, read, update, destroy, retrieve}