import { useLocation } from "react-router-dom"
import { StyledControl } from "./styles"
import { useContext } from "react"
import { PizzaContext } from "../../providers/pizza.context"

export const Control = ()=>{

    let path = useLocation().pathname
    const {setOpenMPizza}=useContext(PizzaContext)
    return(

    <StyledControl>
{path == "/pedidos"? <button onClick={()=>setOpenMPizza(true)}>+ NOVO PEDIDO</button>:null}
    </StyledControl>)
}