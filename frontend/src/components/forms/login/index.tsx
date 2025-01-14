import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { StyledFormLogin } from "./styles";
import { Input } from "../../../fragments/inputs";
import { useContext } from "react";
import { LoginContext } from "../../../providers/login.context";
import logo from "../../../assets/Captura_de_tela_de_2024-11-13_14-38-55-removebg-preview.png";
import { Button800, HeadingOne700 } from "../../../styles/tiphograpy";

export interface ILoginFormData {
  email: string;
  password: string;
}

export const LoginSchema = z.object({
  email: z.string().min(1, "O e-mail é obrigatório").email(),
  password: z.string().min(1, "Senha Obrigatória"),
});

export const LoginForm = () => {
  const { login,load } = useContext(LoginContext);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({ resolver: zodResolver(LoginSchema) });

  const submit: SubmitHandler<ILoginFormData> = (formData) => {
    login(formData);
  };
  return (
    <StyledFormLogin>
      <div className="img_box">
        <img src={logo} alt="" />
        <HeadingOne700>Gourmy</HeadingOne700>
      </div>
      <form onSubmit={handleSubmit(submit)}>
        <Input
          className="input"
          type="text"
          placeholder="Seu e-mail"
          {...register("email")}
          error={errors.email}
        />

        <Input
          className="input"
          type="password"
          placeholder="Senha"
          {...register("password")}
          error={errors.password}
        />
        <button>
          <Button800>{!load ? "ACESSAR" : "ENTRANDO..."}</Button800>
        </button>
      </form>
    </StyledFormLogin>
  );
};
