import { Request, Response } from "express";
import { movimentServiceCreate, movimentServiceRead } from "./stock-moviment.service";
import { allMoviments } from "./stock-moviment.interface";

const controllerMovimentCreate = async (req: Request, res: Response): Promise<Response> => {
    const id: string = req.params.id

    const moviment = await movimentServiceCreate(
        req.body,
        id
    );
    return res.status(201).json(moviment);
};

const controllerMovimentRead = async (req: Request, res: Response): Promise<Response> => {
    const moviments: allMoviments = await movimentServiceRead();
    return res.status(200).json(moviments);
};

export { controllerMovimentCreate, controllerMovimentRead }