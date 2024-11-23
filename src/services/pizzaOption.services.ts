import { AppDataSource } from "../data-source";
import { Pizza } from "../entities/pizza.entity";
import { PizzaOption } from "../entities/pizzaOption.entity";
import { allPizzaOption, readPizzaOption, repositoryPizzaOption } from "../interfaces/pizzaOption.interface";
import { allpizzaOptionReadSchema, pizzaOptionReadSchema } from "../schemas/pizzaOption.schema";

const create = async (
    payload:any,
    pizza:Pizza
  ): Promise<readPizzaOption> => {
    const pizzaORepository: repositoryPizzaOption =
      AppDataSource.getRepository(PizzaOption);
  
    const pizzaO: any= pizzaORepository.create({
      ...payload,
      pizza:pizza
    });
  
    await pizzaORepository.save(pizzaO);
  
    return pizzaOptionReadSchema.parse(pizzaO);
  };
  
  const read = async (): Promise<allPizzaOption> => {
    const repository: repositoryPizzaOption =
      AppDataSource.getRepository(PizzaOption);
  
    const pizzas = await repository.find({ order: { id: 1 },relations:{pizza:true} });
    return allpizzaOptionReadSchema.parse(pizzas);
  };
  
  export default{create,read}