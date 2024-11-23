import { Request, Response } from "express";
import { pizzaOptionServices} from "../services";
import { allPizzaOption } from "../interfaces/pizzaOption.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
    const pizzaOption = await pizzaOptionServices.create(
      req.body,
      res.locals.returnPizza
    );
    return res.status(201).json(pizzaOption);
  };

  const read = async (req: Request, res: Response): Promise<Response> => {
    const pizzaOptions: allPizzaOption= await pizzaOptionServices.read();
    return res.status(200).json(pizzaOptions);
  };

  export default{create,read}