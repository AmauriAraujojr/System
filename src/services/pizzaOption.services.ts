import { AppDataSource } from "../data-source";
import { Pizza } from "../entities/pizza.entity";
import { PizzaOption } from "../entities/pizzaOption.entity";
import { AppError } from "../errors/app.error";
import { repositorypizza } from "../interfaces/pizza.interface";
import {
  allPizzaOption,
  createPizzaOption,
  readPizzaOption,
  repositoryPizzaOption,
} from "../interfaces/pizzaOption.interface";
import {
  allpizzaOptionReadSchema,
  pizzaOptionReadSchema,
} from "../schemas/pizzaOption.schema";

const create = async (
  payload: createPizzaOption,
  pizza: Pizza
): Promise<readPizzaOption> => {
  const pizzaORepository: repositoryPizzaOption =
    AppDataSource.getRepository(PizzaOption);

  const pizzaRepository: repositorypizza = AppDataSource.getRepository(Pizza);

  let priceTotal = "";
  if (payload.halfOptions) {
    let id = payload.halfOptions.id;
    const pizza2: Pizza | null = await pizzaRepository.findOne({
      where: { id },
      relations: { company: true },
    });
    if (!pizza2) {
      throw new AppError("Pizza para a metade não encontrada"); // Caso a pizza não seja encontrada
    }
    if (payload.size == "Grande") {
      if (Number(pizza.price_G) > Number(pizza2.price_G)) {
        let sum = Number(pizza.price_G) + Number(payload.borda.price);
        priceTotal = String(sum);
      } else if (Number(pizza.price_G) < Number(pizza2.price_G)) {
        let sum = Number(pizza2.price_G) + Number(payload.borda.price);

        priceTotal = String(sum);
      } else {
        let sum = Number(pizza.price_G) + Number(payload.borda.price);

        priceTotal = String(sum);
      }
    } else if (payload.size == "Média") {
      if (Number(pizza.price_M) > Number(pizza2.price_M)) {
        let sum = Number(pizza.price_M) + Number(payload.borda.price);
        priceTotal = String(sum);
      } else if (Number(pizza.price_M) < Number(pizza2.price_M)) {
        let sum = Number(pizza2.price_M) + Number(payload.borda.price);
        priceTotal = String(sum);
      } else {
        let sum = Number(pizza.price_M) + Number(payload.borda.price);
        priceTotal = String(sum);
      }
    } else if (payload.size == "Pequena") {
      if (Number(pizza.price_P) > Number(pizza2.price_P)) {
        let sum = Number(pizza.price_P) + Number(payload.borda.price);

        priceTotal = String(sum);
      } else if (Number(pizza.price_P) < Number(pizza2.price_P)) {
        let sum = Number(pizza2.price_P) + Number(payload.borda.price);
        priceTotal = String(sum);
      } else {
        let sum = Number(pizza.price_P) + Number(payload.borda.price);

        priceTotal = String(sum);
      }
    }
    const pizzaOp: PizzaOption = pizzaORepository.create({
      ...payload,
      pizza: pizza,
      halfOptions: pizza2,
      price: priceTotal,
    });

    await pizzaORepository.save(pizzaOp);

    return pizzaOptionReadSchema.parse(pizzaOp);
  } else {
    if (payload.size == "Grande") {
      let sum = Number(pizza.price_G) + Number(payload.borda.price);
      priceTotal = String(sum);
    } else if (payload.size == "Média") {
      let sum = Number(pizza.price_M) + Number(payload.borda.price);
      priceTotal = String(sum);
    } else if (payload.size == "Pequena") {
      let sum = Number(pizza.price_P) + Number(payload.borda.price);
      priceTotal = String(sum);
    }
    const pizzaO: PizzaOption = pizzaORepository.create({
      ...payload,
      pizza: pizza,
      halfOptions: null,
      price: priceTotal,
    });

    await pizzaORepository.save(pizzaO);

    return pizzaOptionReadSchema.parse(pizzaO);
  }
};

const read = async (): Promise<allPizzaOption> => {
  const repository: repositoryPizzaOption =
    AppDataSource.getRepository(PizzaOption);

  const pizzas = await repository.find({
    order: { id: 1 },
    relations: { pizza: { company: true }, halfOptions: true },
  });
  return allpizzaOptionReadSchema.parse(pizzas);
};

export default { create, read };
