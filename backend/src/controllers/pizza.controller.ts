import { Response, Request } from "express";
import { pizzaServices } from "../services";
import { allpizza } from "../interfaces/pizza.interface";

const create = async (req: Request, res: Response): Promise<Response> => {
    const pizza = await pizzaServices.create(
      req.body,
      res.locals.returnCompany
    );
    return res.status(201).json(pizza);
  };

  const read = async (req: Request, res: Response): Promise<Response> => {
    const pizzas: allpizza= await pizzaServices.read();
    return res.status(200).json(pizzas);
  };

  export default{create,read}