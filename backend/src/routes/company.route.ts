import { Router } from "express";
import { companyController } from "../controllers";
import {
  companyCreateSchema,
  companyUpdateSchema,
} from "../schemas/company.schema";
import { VerifyEmailExists } from "../middlewares/verifyEmailExists.middlewere";
import { VerifyEntitieExists } from "../middlewares/verifyEntitieID.middleware";
import { validateBody } from "../middlewares/validadeBody.middleware";
import { VerifyFantasyNameExists } from "../middlewares/verifyFantasyName.middleware";

const companyRouter: Router = Router();

companyRouter.post(
  "",
  VerifyFantasyNameExists,
  VerifyEmailExists,
  validateBody(companyCreateSchema),
  companyController.create
);

companyRouter.use("/:id", VerifyEntitieExists);

companyRouter.get("", companyController.read);

companyRouter.get("/:id", companyController.retrieve);

companyRouter.patch(
  "/:id",
  validateBody(companyUpdateSchema),
  companyController.update
);

companyRouter.delete("/:id", companyController.destroy);

export { companyRouter };
