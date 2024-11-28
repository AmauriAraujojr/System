import "express-async-errors"
import express, { Application } from "express";
import cors from "cors"
import { companyRouter } from "./routes/company.route";
import { sessionRouter } from "./routes/session.router";
import { employeesRouter } from "./routes/employees.route";
import { clientRouter } from "./routes/client.route";
import { productRouter } from "./routes/product.route";
import { handleError } from "./middlewares/handleError.middleware";
import { pedidosRouter } from "./routes/pedidos.route";
import { pizzaRouter } from "./routes/pizza.route";
import { pizzaOptionRouter } from "./routes/pizzaOption.route";
import { productSellRouter } from "./routes/productsell.route";

const app:Application = express();
app.use(cors())
app.use(express.json())

app.use("/company",companyRouter)

app.use("/login",sessionRouter)

app.use("/employees",employeesRouter)

app.use("/client",clientRouter)

app.use("/product",productRouter)

app.use("/pedidos",pedidosRouter)

app.use("/pizza", pizzaRouter)

app.use("/pizzaOption", pizzaOptionRouter)

app.use("/productSell", productSellRouter)

app.use(handleError)

export default app