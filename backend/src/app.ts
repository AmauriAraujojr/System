<<<<<<< HEAD
import "express-async-errors"

import express from "express";
import { stockProductRouter } from "./modules/stock/stock-products/stock.routes";
import { handleError } from "./errors/handle-error";
import { stockMovimentsRouter } from "./modules/stock/stock-moviments/stock-moviments.routes";

const app = express();

app.use(express.json());


app.get("/health", (req, res) => {
  return res.json({
    status: "ok",
  });
});

app.use("/stock-products", stockProductRouter)
app.use("/stock-moviments",stockMovimentsRouter )

app.use(handleError)

export { app };
=======
import "express-async-errors"
import express, { Application } from "express";
import cors from "cors"
import { companyRouter } from "./routes/company.route";
import { sessionRouter } from "./routes/session.router";
import { employeesRouter } from "./routes/employees.route";
import { clientRouter } from "./routes/client.route";
import { productRouter } from "./routes/product.route";
import { handleError } from "./middlewares/handleError.middleware";
import { categoryRouter } from "./routes/category.route";

const app:Application = express();
app.use(cors())
app.use(express.json())

app.use("/company",companyRouter)

app.use("/login",sessionRouter)

app.use("/employees",employeesRouter)

app.use("/client",clientRouter)

app.use("/product",productRouter)

app.use("/category",categoryRouter)



app.use(handleError)

export default app
>>>>>>> origin/main
