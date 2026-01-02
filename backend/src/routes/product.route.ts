import { Router } from "express";
import { productController } from "../controllers";
import { validateBody } from "../middlewares/validadeBody.middleware";
import { VerifyEntitieExists } from "../middlewares/verifyEntitieID.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { productCreateSchema, productUpdateSchema } from "../schemas/product.schema";
import { VerifyProductExists } from "../middlewares/verifyProduct";

export const productRouter:Router=Router();

productRouter.post("", verifyToken,VerifyEntitieExists, validateBody(productCreateSchema), productController.create)

productRouter.get("",productController.read)

productRouter.use("/:id",VerifyProductExists,verifyToken,)

productRouter.patch("/:id",validateBody(productUpdateSchema), productController.update)

productRouter.get("/:id", productController.retrieve)

productRouter.delete("/:id", productController.destroy)