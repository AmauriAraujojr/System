import { useContext } from "react";
import { IPedidos } from "../../providers/login.context";
import { Body500, Body700 } from "../../styles/tiphograpy";
import { StatusForm } from "../forms/statusform";
import { StyledCardPedidos } from "./styles";
import { PedidosContext } from "../../providers/pedidos.context";
import { IoIosOpen } from "react-icons/io";

export interface ICardProps {
  pedido: IPedidos;
  index: string | null;
}

export const CardPedidos = ({ pedido, index }: ICardProps) => {
  const { setCurrentPedido, setOpenPedido } = useContext(PedidosContext);

  const sum = () => {
    let totalPrice = 0;

    let pizzaOptionPrice = 0;

    if (pedido.products.length > 0) {
      totalPrice = pedido.products
        .map((produto: any) => Number(produto.price))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    if (pedido.pizzaOption.length > 0) {
      pizzaOptionPrice = pedido.pizzaOption
        .map((produto: any) => Number(produto.price))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    }

    let taxa = 0;
    if (pedido.taxa) {
      taxa = Number(pedido.taxa);
    }

    let total = totalPrice + pizzaOptionPrice + taxa;

    return total.toFixed(2);
  };

  const opening = () => {
    setCurrentPedido(pedido);
    setOpenPedido(true);
  };

  return (
    <StyledCardPedidos>
      <div className="box_type">
        <Body500 className={pedido.type}>{pedido.type}</Body500>
        <Body700>Pedido Nº {Number(index) + 1}</Body700>
        <Body700 onClick={() => opening()} className="open">
          <IoIosOpen />
        </Body700>
      </div>
      <div className="box_client">
        <Body500>{pedido.client.name}</Body500>
        <Body700>R$ {sum()}</Body700>
      </div>
      {pedido.type == "Entrega" ? (
        <div className="box_address">
          <Body500>
            {pedido.client.address.street}, {pedido.client.address.number},{" "}
            {pedido.client.address.neighborhood}
          </Body500>

          <StatusForm id={pedido.id} status={pedido.status} />
        </div>
      ) : (
        <div className="box_address">
          <Body500>Cliente retira no local</Body500>
          <StatusForm id={pedido.id} status={pedido.status} />
        </div>
      )}
    </StyledCardPedidos>
  );
};
