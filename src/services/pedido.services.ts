import { AppDataSource } from "../data-source";
import Address from "../entities/address.entity";
import Client from "../entities/client.entity";
import Company from "../entities/company.entity";
import { Pedido } from "../entities/pedidosOn.entity";
import { AppError } from "../errors/app.error";
import { addressRepo } from "../interfaces/address.interface";
import { repositoryClient } from "../interfaces/client.interface";
import { repositoryCompany } from "../interfaces/company.interface";
import {
  allPedidos,
  readPedidos,
  repositoryPedidos,
  updatePedidos,
} from "../interfaces/pedidos.interface";
import {
  allpedidosReadSchema,
  pedidosReadSchema,
} from "../schemas/pedidos.schema";

const create = async (
  payload: any,
  fantasyName: string
): Promise<readPedidos> => {
  const pedidoRepository: repositoryPedidos =
    AppDataSource.getRepository(Pedido);

  const comapanyRepository: repositoryCompany =
    AppDataSource.getRepository(Company);

  const clientRepository: repositoryClient =
    AppDataSource.getRepository(Client);

  const addressRepository: addressRepo = AppDataSource.getRepository(Address);

  const company: Company | null = await comapanyRepository.findOne({
    where: { fantasyName },
  });

  if (!company) throw new AppError("Company not found", 404);

  let client: any = {};
  const phoneNumber = payload.client.phoneNumber;
  const findClient: Client | null = await clientRepository.findOne({
    where: { phoneNumber },
    relations: {
      address: true,
    },
  });

  if (findClient) {
    client = findClient;
  } else {
    const address: any = addressRepository.create(payload.client.address);
    await addressRepository.save(address);

    client = clientRepository.create({ ...payload.client, address: address });
    await clientRepository.save(client);
  }

  const pedido: any = pedidoRepository.create({
    ...payload,
    company: company,
    client: client,
  });

  await pedidoRepository.save(pedido);

  return pedidosReadSchema.parse(pedido);
};

const read = async (): Promise<allPedidos> => {
  const repository: repositoryPedidos = AppDataSource.getRepository(Pedido);

  const pedidos = await repository.find({
    relations: {
      client: { address: true },
      products: true,
      pizzaOption: { pizza: true },
    },
    order: { id: "ASC" },
  });

  return allpedidosReadSchema.parse(pedidos);
};

const update = async (
  payload: updatePedidos,
  pedido: Pedido
): Promise<readPedidos> => {
  const pedidoRepository: repositoryPedidos =
    AppDataSource.getRepository(Pedido);

  Object.assign(pedido, payload);

  await pedidoRepository.save(pedido);

  return pedidosReadSchema.parse(pedido);
};

export default { create, read, update };
