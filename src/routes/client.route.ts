import { Router } from "express";
import { clientController} from "../controllers";
import { VerifyEmailExists } from "../middlewares/verifyEmailExists.middlewere";
import { validateBody } from "../middlewares/validadeBody.middleware";
import { clientCreateSchema, clientUpdateSchema } from "../schemas/client.schema";
import { VerifyClient } from "../middlewares/veryfyClient.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyOwner } from "../middlewares/verifyOwner.middleware";

export const clientRouter:Router=Router();

clientRouter.post("",VerifyEmailExists,validateBody(clientCreateSchema), clientController.create)

clientRouter.get("",verifyToken, clientController.read)

clientRouter.use("/:id", verifyToken ,verifyOwner, VerifyClient)

clientRouter.patch("/:id",validateBody(clientUpdateSchema),clientController.update)

clientRouter.get("/:id",clientController.retrieve)

clientRouter.delete("/:id",clientController.destroy)


