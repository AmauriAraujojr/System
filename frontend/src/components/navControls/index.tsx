import { useNavigate } from "react-router-dom";
import { StyledNavControls } from "./styles";
import { HeadingTwo700 } from "../../styles/tiphograpy";
import { BsFillKanbanFill } from "react-icons/bs";
import { MdTableBar } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoStorefront } from "react-icons/io5";
import { FaBoxOpen } from "react-icons/fa";
import { FaPeopleRoof } from "react-icons/fa6";
import { BiSolidFoodMenu } from "react-icons/bi";

export const NavControlss = () => {
  const navigate = useNavigate();
  return (
    <StyledNavControls>
      <li
        onClick={() => {
          navigate("/admin");
        }}
      >
        <HeadingTwo700 className="text">
          {" "}
          <IoStorefront />
          Empresa
        </HeadingTwo700>
      </li>
      <li
        onClick={() => {
          navigate("/pedidos");
        }}
      >
        <HeadingTwo700 className="text">
          <BsFillKanbanFill />
          Pedidos
        </HeadingTwo700>
      </li>
      <li
        onClick={() => {
          navigate("/admin");
        }}
      >
        <HeadingTwo700 className="text">
          <MdTableBar /> Mesas
        </HeadingTwo700>
      </li>
      <li
        onClick={() => {
          navigate("/admin");
        }}
      >
        <HeadingTwo700 className="text">
          {" "}
          <FaFileInvoiceDollar />
          Financeiro
        </HeadingTwo700>
      </li>
      <li
        onClick={() => {
          navigate("/admin");
        }}
      >
        <HeadingTwo700 className="text">
          {" "}
          <FaBoxOpen />
          Estoque
        </HeadingTwo700>
      </li>
      <li
        onClick={() => {
          navigate("/admin");
        }}
      >
        <HeadingTwo700 className="text">
          {" "}
          <FaPeopleRoof />
          Clientes
        </HeadingTwo700>
      </li>
      <li
        onClick={() => {
          navigate("/admin");
        }}
      >
        <HeadingTwo700 className="text">
          <BiSolidFoodMenu />
          Cardápio
        </HeadingTwo700>
      </li>
      <li
        onClick={() => {
          navigate("/admin");
        }}
      >
        <HeadingTwo700 className="text">Fidelidade</HeadingTwo700>
      </li>
      <li
        onClick={() => {
          navigate("/admin");
        }}
      >
        <HeadingTwo700 className="text">Cupons</HeadingTwo700>
      </li>
      <li
        onClick={() => {
          navigate("/admin");
        }}
      >
        <HeadingTwo700 className="text">Disparos</HeadingTwo700>
      </li>
      <li
        onClick={() => {
          navigate("/admin");
        }}
      >
        <HeadingTwo700 className="text">Suporte</HeadingTwo700>
      </li>
    </StyledNavControls>
  );
};
