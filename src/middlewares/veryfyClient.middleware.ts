import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/app.error";
import { repositoryClient } from "../interfaces/client.interface";
import { clientReadSchema } from "../schemas/client.schema";
import Client from "../entities/client.entity";

export const VerifyClient = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const id: number = Number(req.params.id);

  const repositoryClient: repositoryClient =
    AppDataSource.getRepository(Client);

  const client: Client | null = await repositoryClient.findOne({
    where: { id },
    relations: { address: true },
  });

  if (!client) throw new AppError("Client not found", 404);

  const returnClient = clientReadSchema.parse(client);

  res.locals = { ...res.locals, returnClient, client };

  return next();
};
