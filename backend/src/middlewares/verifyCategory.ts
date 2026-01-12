import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { AppError } from "../errors/app.error";
import { repositoryCategory } from "../interfaces/category.interface";
import Category from "../entities/categorys";
import { categoryReadSchema } from "../schemas/category.schema";

export const VerifyCategoryExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const id: number = Number(req.params.id)

    const repositoryCategory: repositoryCategory = AppDataSource.getRepository(Category)

    const category: Category | null = await repositoryCategory.findOne({
        where: { id }

    })

    if (!category) throw new AppError("Category not found", 404)

    const returnCategory = categoryReadSchema.parse(category)

    res.locals = { ...res.locals, returnCategory, category }

    return next()
}