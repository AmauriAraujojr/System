import React, { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { IStatusFormData } from "../components/forms/statusform";
import { IPedidos } from "./login.context";

interface IPedidosProvider {
  children: React.ReactNode;
}

interface IPedidoContext {
  updatePedido: (id: number, formdata: IStatusFormData) => Promise<void>;
  pedidos: IPedidos[];
  currentPedido: IPedidos | undefined;
  setCurrentPedido: React.Dispatch<React.SetStateAction<IPedidos | undefined>>;
  openPedido: boolean;
  setOpenPedido: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PedidosContext = createContext({} as IPedidoContext);

export const PedidosProvider = ({ children }: IPedidosProvider) => {
  const [pedidos, setPedidos] = useState<IPedidos[]>([]);
  const [currentPedido, setCurrentPedido] = useState<IPedidos>();
  const [openPedido, setOpenPedido] = useState(false);
  const getAllPedidos = async () => {
    const userLogado = JSON.parse(localStorage.getItem("@USER")!);

    try {
      const response = await api.get("/pedidos");

      const pedidosAll = response.data;
      const filteredCompanyPedidos = pedidosAll.filter((pedidos: IPedidos) => {
        return pedidos.company.id == userLogado.userType.id;
      });

      setPedidos(filteredCompanyPedidos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllPedidos();
  }, []);

  const updatePedido = async (id: number, formdata: IStatusFormData) => {
    try {
      await api.patch(`/pedidos/${id}`, formdata);
    } catch (error) {
      console.log(error);
    } finally {
      getAllPedidos();
    }
  };
  return (
    <PedidosContext.Provider
      value={{
        updatePedido,
        pedidos,
        currentPedido,
        setCurrentPedido,
        openPedido,
        setOpenPedido,
      }}
    >
      {children}
    </PedidosContext.Provider>
  );
};
