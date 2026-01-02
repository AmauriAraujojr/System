import { Request, Response } from "express";
import { allProduct, readProduct } from "../interfaces/product.interface";
import { productServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const product = await productServices.create(
      req.body,
      res.locals.returnCompany
    );
    return res.status(201).json(product);
  };

  const read = async (req: Request, res: Response): Promise<Response> => {
    const products: allProduct= await productServices.read();
    return res.status(200).json(products);
  };

  const update = async (req: Request, res: Response): Promise<Response> => {
    const product: readProduct = await productServices.update(
      req.body,
      res.locals.returnProduct,

    );
    return res.status(200).json(product);
  };

  const retrieve = async (req: Request, res: Response): Promise<Response> => {
    const product: readProduct= await res.locals.returnProduct;
    return res.status(200).json(product);
  };

  const destroy = async (req: Request, res: Response): Promise<Response> => {
    await productServices.destroy(res.locals.product,
    );
    return res.status(204).json();
  };

  export default{create,read,update,destroy,retrieve}