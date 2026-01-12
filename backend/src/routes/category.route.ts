import { Router } from "express";
import { productController } from "../controllers";
import { validateBody } from "../middlewares/validadeBody.middleware";
import { VerifyEntitieExists } from "../middlewares/verifyEntitieID.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { productCreateSchema, productUpdateSchema } from "../schemas/product.schema";
import { VerifyProductExists } from "../middlewares/verifyProduct";
import { categoryCreateSchema, categoryUpdateSchema } from "../schemas/category.schema";
import categoryController from "../controllers/category.controller";
import { VerifyCategoryExists } from "../middlewares/verifyCategory";

export const categoryRouter:Router=Router();

categoryRouter.post("", verifyToken,VerifyEntitieExists, validateBody(categoryCreateSchema), categoryController.create)

categoryRouter.get("",categoryController.read)

categoryRouter.use("/:id",VerifyCategoryExists)

categoryRouter.patch("/:id",validateBody(categoryUpdateSchema),categoryController.update)

categoryRouter.get("/:id",categoryController.retrieve)

categoryRouter.delete("/:id",categoryController.destroy)