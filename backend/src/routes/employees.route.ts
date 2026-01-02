import { Router } from "express";
import { employeeController } from "../controllers";
import { VerifyEntitieExists } from "../middlewares/verifyEntitieID.middleware";
import { VerifyEmailExists } from "../middlewares/verifyEmailExists.middlewere";
import { employeeCreateSchema, employeeUpdateSchema } from "../schemas/employees.schema";
import { VerifyEmployeeExists } from "../middlewares/verifyEmployee.middleware";
import { verifyToken } from "../middlewares/verifyToken.middleware";
import { verifyOwner } from "../middlewares/verifyOwner.middleware";
import { validateBody } from "../middlewares/validadeBody.middleware";

export const employeesRouter:Router=Router();

employeesRouter.post("", verifyToken,VerifyEntitieExists,VerifyEmailExists,validateBody(employeeCreateSchema), employeeController.create)

employeesRouter.get("",employeeController.read)

employeesRouter.use("/:id", verifyToken,verifyOwner,VerifyEmployeeExists)

employeesRouter.patch("/:id",validateBody(employeeUpdateSchema),employeeController.update)

employeesRouter.get("/:id",employeeController.retrieve)

employeesRouter.delete("/:id",employeeController.destroy)