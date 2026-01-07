import "express-async-errors"
import express, { Application } from "express";
import cors from "cors"
import { companyRouter } from "./routes/company.route";
import { sessionRouter } from "./routes/session.router";
import { employeesRouter } from "./routes/employees.route";
import { clientRouter } from "./routes/client.route";
import { productRouter } from "./routes/product.route";
import { handleError } from "./middlewares/handleError.middleware";

const app:Application = express();
app.use(cors())
app.use(express.json())

app.use("/company",companyRouter)

app.use("/login",sessionRouter)

app.use("/employees",employeesRouter)

app.use("/client",clientRouter)

app.use("/product",productRouter)



app.use(handleError)

export default app