import { Request, Response } from "express";
import { stockServiceCreate, stockServiceDestroy, stockServiceRead, stockServiceUpdate } from "./stock.service";
import { allProduct, readProduct } from "./stock.interface";

const controllerStockCreate = async (req: Request, res: Response): Promise<Response> => {
  const product = await stockServiceCreate(
    req.body,
  );
  return res.status(201).json(product);
};

const controllerStockRead = async (req: Request, res: Response): Promise<Response> => {
  const products: allProduct = await stockServiceRead();
  return res.status(200).json(products);
};

const controllerStockUpdate = async (req: Request, res: Response): Promise<Response> => {
  const id: string = req.params.id

  const product: readProduct = await stockServiceUpdate(
    req.body,
    id,

  );
  return res.status(200).json(product);
};

const controllerStockDestroy = async (req: Request, res: Response): Promise<Response> => {
  const id: string = req.params.id

  await stockServiceDestroy(id
  );
  return res.status(204).json();
};

export { controllerStockCreate, controllerStockRead, controllerStockUpdate,controllerStockDestroy }