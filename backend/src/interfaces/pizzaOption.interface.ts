import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { PizzaOption } from "../entities/pizzaOption.entity";
import { allpizzaOptionReadSchema, pizzaOptionCreateSchema, pizzaOptionReadSchema } from "../schemas/pizzaOption.schema";


type createPizzaOption= z.infer<typeof pizzaOptionCreateSchema>;
type readPizzaOption= z.infer<typeof pizzaOptionReadSchema>;
type updatePizzaOption= DeepPartial<PizzaOption>;
type allPizzaOption= z.infer<typeof allpizzaOptionReadSchema>;
type repositoryPizzaOption= Repository<PizzaOption>;

export {
  allPizzaOption,
  createPizzaOption,
  updatePizzaOption,
  readPizzaOption,
  repositoryPizzaOption,
};
