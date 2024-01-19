import "express-async-errors"
import express, { Application } from "express";
import cors from "cors"
import { companyRouter } from "./routes/company.route";

const app:Application = express();
app.use(cors())
app.use(express.json())

app.use("/company", companyRouter)

export default app