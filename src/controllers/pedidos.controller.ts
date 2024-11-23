import { Request,Response } from "express";
import { pedidoServices } from "../services";
import { allPedidos } from "../interfaces/pedidos.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
    const pedido= await pedidoServices.create(
      req.body,
      req.params.name
    );
    return res.status(201).json(pedido);
  };

const read = async (req: Request, res: Response): Promise<Response> => {
  const pedidos: allPedidos= await pedidoServices.read();
  return res.status(200).json(pedidos);
};

const update = async (req: Request, res: Response): Promise<Response> => {
  const pedido= await pedidoServices.update(
    req.body,
    res.locals.returnPedido,
  );
  return res.status(201).json(pedido);
};

  export default{create, read, update}