import { Request, Response } from "express";
import { clientServices } from "../services";
import { allClient, readClient } from "../interfaces/client.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
  const client = await clientServices.create(
    req.body,

  );
  return res.status(201).json(client);
};

const read = async (req: Request, res: Response): Promise<Response> => {
  const client: allClient = await clientServices.read();
  return res.status(200).json(client);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const client: readClient = await clientServices.update(
    req.body,
    res.locals.client
  );
  return res.status(200).json(client);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const client: readClient = await res.locals.returnClient;
  return res.status(200).json(client);
};

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await clientServices.destroy(res.locals.client);
  return res.status(204).json();
};

export default {
  create,
  read,
  update,
  retrieve,
  destroy,
};
