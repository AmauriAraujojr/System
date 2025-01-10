import { AppDataSource } from "../data-source";
import Company from "../entities/company.entity";
import { Pizza } from "../entities/pizza.entity";
import { allpizza, readpizza, repositorypizza } from "../interfaces/pizza.interface";
import { allpizzaReadSchema, pizzaReadSchema } from "../schemas/pizza.schema";

const create = async (
    payload:any,
    company: Company
  ): Promise<readpizza> => {
    const pizzaRepository: repositorypizza =
      AppDataSource.getRepository(Pizza);
  
    const pizza: any= pizzaRepository.create({
      ...payload,
      company: company,
    });
  
    await pizzaRepository.save(pizza);
  
    return pizzaReadSchema.parse(pizza);
  };
  
  const read = async (): Promise<allpizza> => {
    const repository: repositorypizza =
      AppDataSource.getRepository(Pizza);
  
    const pizzas = await repository.find({ order: { id: 1 },relations:{company:true} });
    return allpizzaReadSchema.parse(pizzas);
  };
  
  export default{create,read}