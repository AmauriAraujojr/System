import "express-async-errors"
import express, { Application } from "express";
import cors from "cors"
import { companyRouter } from "./routes/company.route";
import { handleError } from "./middlewares/handleError.middleware";
import { sessionRouter } from "./routes/session.router";
import { employeesRouter } from "./routes/employees.route";
import { clientRouter } from "./routes/client.route";

const app:Application = express();
app.use(cors())
app.use(express.json())

app.use("/company",companyRouter)

app.use("/login",sessionRouter)

app.use("/employees",employeesRouter)

app.use("/client",clientRouter)


app.use(handleError)

export default app