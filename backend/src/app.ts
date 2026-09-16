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