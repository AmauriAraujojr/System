import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { PedidosContext } from "../../../providers/pedidos.context";
import { StyledFormSelect } from "./styles";

export interface IStatusFormData {
  status: string;
  id: number;
}

interface formProps {
  id: number;
  status: string;
}

export const StatusForm = ({ id, status }: formProps) => {
  const { updatePedido } = useContext(PedidosContext);

  const { register, handleSubmit } = useForm<IStatusFormData>({});

  const submit: SubmitHandler<IStatusFormData> = (formData) => {
    updatePedido(id, formData);
  };
  return (
    <StyledFormSelect>
      <form onChange={handleSubmit(submit)}>
        <select {...register("status")}>
          {status == "Pendente" ? (
            <>
              <option value="">{status}</option>
              <option value="Aceito">Aceito</option>
              <option value="Concluído">Concluido</option>
              <option value="Cancelado">Cancelar</option>
            </>
          ) : null}
          {status == "Aceito" ? (
            <>
              <option value="">{status}</option>

              <option value="Concluído">Concluido</option>
              <option value="Cancelado">Cancelar</option>
            </>
          ) : null}
          {status == "Concluído" ? (
            <>
              <option value="">{status}</option>

              <option value="Cancelado">Cancelar</option>
            </>
          ) : null}
        </select>
      </form>
    </StyledFormSelect>
  );
};
