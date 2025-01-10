import { Request, Response } from "express";
import { sessionReturn } from "../interfaces/session.interface";
import sessionServices from "../services/session.services";

const create = async (req: Request, res: Response): Promise<Response> => {
  const token: sessionReturn = await sessionServices.create(req.body);
  return res.status(200).json(token);
};

export default{create}
