import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import Client from "../entities/client.entity";
import { allClientReadSchema, clientCreateSchema, clientReadSchema } from "../schemas/client.schema";


type createClient = z.infer<typeof clientCreateSchema>;
type readClient = z.infer<typeof clientReadSchema>;
type updateClient = DeepPartial<Client>;
type allClient = z.infer<typeof allClientReadSchema>;
type repositoryClient = Repository<Client>;

export {
  allClient,
  createClient,
  updateClient,
  readClient,
  repositoryClient,
};
