import { Request, Response } from "express";
import {productSellServices} from "../services";
import { allproductSell } from "../interfaces/productSell.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
    const productSell = await productSellServices.create(
      res.locals.returnProduct
    );
    return res.status(201).json(productSell);
  };

  const read = async (req: Request, res: Response): Promise<Response> => {
    const productSell: allproductSell = await productSellServices.read();
    return res.status(200).json(productSell);
  };

  export default{create, read}