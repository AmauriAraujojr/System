import { AppDataSource } from "../data-source";
import Category from "../entities/categorys";
import Company from "../entities/company.entity";
import { allCategory, createCategory, readCategory, repositoryCategory, updateCategory } from "../interfaces/category.interface";
import { allcategoryReadSchema, categoryReadSchema } from "../schemas/category.schema";

const create = async (
  payload: createCategory,
  company: Company
): Promise<readCategory> => {

  const CategoryRepository: repositoryCategory = AppDataSource.getRepository(Category)


  const category: Category = CategoryRepository.create({
    ...payload,
    company: company,
  });

  await CategoryRepository.save(category);

  return categoryReadSchema.parse(category);
};

const read = async (): Promise<allCategory> => {
  const repository: repositoryCategory = AppDataSource.getRepository(Category);

  const Categorys = await repository.find({

    order: { id: 1 },
  });
  return allcategoryReadSchema.parse(Categorys);
};

const update = async (
  payload: updateCategory,
  category: Category,

): Promise<readCategory> => {
  const repository: repositoryCategory = AppDataSource.getRepository(Category);


  const updCategory: Category = repository.create({
    ...category,
    ...payload,
  });

  const CategoryUp = await repository.save(updCategory);

  return categoryReadSchema.parse(CategoryUp);
};

const destroy = async (category: Category,  
): Promise<void> => {
  const repository: repositoryCategory = AppDataSource.getRepository(Category);

  await repository.remove(category);
};

export default { create, read, update, destroy };
