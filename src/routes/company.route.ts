import { Router } from "express";
import { companyController } from "../controllers";

const companyRouter:Router= Router()

companyRouter.post("", companyController.create)

export{companyRouter}