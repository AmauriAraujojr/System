import { useLocation } from "react-router-dom";
import { StyledHeader } from "./styles";
import { useContext } from "react";
import { LoginContext } from "../../providers/login.context";
import { Button800, HeadingOne700h } from "../../styles/tiphograpy";
import logo from "../../assets/Captura_de_tela_de_2024-11-13_14-38-55-removebg-preview.png";

export const Header = () => {

  const path =useLocation().pathname
const{logout}=useContext(LoginContext)
  return (
    <StyledHeader >
        <div className="flexBox">
           <div className="userData">
          <img src={logo} alt="" />
          <HeadingOne700h className="h2">Gourmy</HeadingOne700h>
        </div> 
          {path == "/pedidos"?<HeadingOne700h>Últimos pedidos</HeadingOne700h>:null}
        <button onClick={()=>{logout()}}><Button800>Sair</Button800></button>
        </div>
    </StyledHeader>
  );
};