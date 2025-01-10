import { Request, Response } from "express";
import { allCompany, readCompany } from "../interfaces/company.interface";
import { companyServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const company: readCompany = await companyServices.create(req.body);
  return res.status(201).json(company);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const companies: allCompany = await companyServices.read();
  return res.status(200).json(companies);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const company: readCompany = await res.locals.returnCompany;
  return res.status(200).json(company);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const company: readCompany = await companyServices.update(
    req.body,
    res.locals.company
  );
  return res.status(200).json(company);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await companyServices.destroy(res.locals.company);
  return res.status(204).json();
};

export default { create, read, retrieve, update, destroy };
