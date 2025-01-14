import { useContext } from "react";

import { PedidosContext } from "../../../providers/pedidos.context";
import { Body500, Body700 } from "../../../styles/tiphograpy";
import { StyledNewModalBox } from "./styles";

export const PedidosModal = () => {
  const { currentPedido, setOpenPedido } = useContext(PedidosContext);
  
  const getHour = (timestamp: string) => {
    const data = new Date(timestamp);
    // data.setHours(data.getHours() - 3);

    const hour = data.getHours();
    const minutes = data.getMinutes();
    const second = data.getSeconds();

    // Formatar a data como DD-MM-YYYY
    const formattedHour = `${String(hour).padStart(2, "0")} : ${String(
     minutes
    ).padStart(2, "0")} : ${String(second).padStart(2, "0")}`;

    // Retornar a data formatada
    return formattedHour;
  }

  const sum = () => {
    let totalPrice = 0;

    let pizzaOptionPrice = 0;

    if (currentPedido && currentPedido.products.length > 0) {
      totalPrice = currentPedido?.products
        .map((produto: any) => Number(produto.price))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    if (currentPedido && currentPedido.pizzaOption.length > 0) {
      pizzaOptionPrice = currentPedido?.pizzaOption
        .map((produto: any) => Number(produto.price))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    let taxa = 0;
    if (currentPedido?.taxa) {
      taxa = Number(currentPedido?.taxa);
    }

    let total = totalPrice + pizzaOptionPrice + taxa;

    return total.toFixed(2);
  };

  let index: number = 0;
  if (Number(currentPedido?.index)) {
    index = Number(currentPedido?.index) + 1;
  }
  return (
    <StyledNewModalBox>
      <div role="dialog" className="modal">
        <div className="box_one">
          <Body700>Pedido Nº {index}</Body700>
          <Body500 className="desc"> Pedido realizado às: {getHour(String(currentPedido?.createdAt))}</Body500>
          <button className="closeButton" onClick={() => setOpenPedido(false)}>
            x
          </button>
        </div>
        {currentPedido!.pizzaOption.length > 0
          ? currentPedido?.pizzaOption.map((pizzaO) => {
              return (
                <div className="pizza_options" key={pizzaO.id}>
                  <Body700>Pizza</Body700>
                  <div className="size"><Body500>{pizzaO.size}</Body500> - <Body500 className="desc">{pizzaO.extras}</Body500>
                  </div>
                  {!pizzaO.halfOptions ? (
                    <>
                      <Body500>{pizzaO.pizza.name}</Body500>
                      <Body500 className="desc">
                        {pizzaO.pizza.description}
                      </Body500>
                    </>
                  ) : (
                    <>
                      <Body500>1/2 {pizzaO.pizza.name}</Body500>
                      <Body500 className="desc">
                        {pizzaO.pizza.description}
                      </Body500>
                      <Body500>1/2 {pizzaO.halfOptions?.name}</Body500>
                      <Body500 className="desc">
                        {pizzaO.halfOptions?.description}
                      </Body500>
                    </>
                  )}

                  <Body500 className="price">
                    R$ {Number(pizzaO.price).toFixed(2)}
                  </Body500>
                </div>
              );
            })
          : null}

        {currentPedido!.products.length > 0
          ? currentPedido?.products.map((products) => {
              return (
                <div className="products_options" key={products.id}>
                  <Body700>{products.product.category}</Body700>
                  <Body500>{products.product.name}</Body500>

                  <Body500 className="price">
                    R$ {Number(products.price).toFixed(2)}
                  </Body500>
                </div>
              );
            })
          : null}

        <Body500>{currentPedido?.type}</Body500>

        {currentPedido?.type == "Entrega" ? (
          <div className="box_entrega">
            <Body500>Taxa de entrega:</Body500>
            <Body500 className="price">
              R$ {Number(currentPedido.taxa).toFixed(2)}
            </Body500>
          </div>
        ) : null}
        <Body700 className="price total">Total: R$ {sum()}</Body700>

        <div className="cliente_box">
          <div className="name_box">
            <Body500>Cliente: {currentPedido?.client.name}</Body500>
            <Body500>Telefone: {currentPedido?.client.phoneNumber}</Body500>
          </div>
          {currentPedido?.type == "Entrega" ? (
            <div className="address_box">
              <Body500>
                {currentPedido?.client.address.street},{" "}
                {currentPedido?.client.address.number},{" "}
                {currentPedido?.client.address.neighborhood}
              </Body500>
            </div>
          ) : null}
        </div>
      </div>
    </StyledNewModalBox>
  );
};
