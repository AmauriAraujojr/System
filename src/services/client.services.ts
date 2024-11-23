import { compare } from "bcryptjs";
import { AppDataSource } from "../data-source";
import Address from "../entities/address.entity";
import Client from "../entities/client.entity";
import { AppError } from "../errors/app.error";
import { addressRepo } from "../interfaces/address.interface";
import {
  allClient,
  createClient,
  readClient,
  repositoryClient,
  updateClient,
} from "../interfaces/client.interface";

import {
  allClientReadSchema,
  clientReadSchema,
} from "../schemas/client.schema";

const create = async (payload: createClient): Promise<readClient> => {
  const clientRepository: repositoryClient =
    AppDataSource.getRepository(Client);

  const addressRepository: addressRepo = AppDataSource.getRepository(Address);
  const address: Address = addressRepository.create(payload.address);

  await addressRepository.save(address);

  const client: Client = clientRepository.create({
    ...payload,
    address: address,
  });

  await clientRepository.save(client);

  return clientReadSchema.parse(client);
};

const read = async (): Promise<allClient> => {
  const repository: repositoryClient = AppDataSource.getRepository(Client);

  const client = await repository.find({
    relations: { address: true, pedidos:{company:true} },
    order: { id: 1 },
  });
  return allClientReadSchema.parse(client);
};

const update = async (
  payload: updateClient,
  client: Client
): Promise<readClient> => {
  const repository: repositoryClient = AppDataSource.getRepository(Client);

  const addressRepository: addressRepo = AppDataSource.getRepository(Address);

  const addressUpd: Address = addressRepository.create({
    ...client.address,
    ...payload.address,
  });
  await addressRepository.save(addressUpd);

  const updClient: Client = repository.create({
    ...client,
    ...payload,
    address: addressUpd,
  });

  const clientUp = await repository.save(updClient);

  return clientReadSchema.parse(clientUp);
};

const destroy = async (client: Client): Promise<void> => {
  const repository: repositoryClient = AppDataSource.getRepository(Client);

  await repository.remove(client);
};


export default { create, read, update, destroy};
