import { Router } from "express";
import { employeeController } from "../controllers";
import { VerifyEntitieExists } from "../middlewares/verifyEntitieID.middleware";
import { VerifyEmailExists } from "../middlewares/verifyEmailExists.middlewere";
import { validateBody } from "../middlewares/validadeBody.middleware";
import { employeeCreateSchema } from "../schemas/employees.schema";

export const employeesRouter:Router=Router();

employeesRouter.post("/:id", VerifyEntitieExists,VerifyEmailExists,validateBody(employeeCreateSchema), employeeController.create)