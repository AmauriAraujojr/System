import { z } from "zod";
import { DeepPartial, Repository } from "typeorm";
import { allpizzaReadSchema, pizzaCreateSchema, pizzaReadSchema } from "../schemas/pizza.schema";
import { Pizza } from "../entities/pizza.entity";


type createpizza= z.infer<typeof pizzaCreateSchema>;
type readpizza= z.infer<typeof pizzaReadSchema>;
type updatepizza= DeepPartial<Pizza>;
type allpizza= z.infer<typeof allpizzaReadSchema>;
type repositorypizza= Repository<Pizza>;

export {
  allpizza,
  createpizza,
  updatepizza,
  readpizza,
  repositorypizza,
};
