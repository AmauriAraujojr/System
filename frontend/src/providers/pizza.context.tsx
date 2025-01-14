import React, { createContext, useEffect, useState } from "react";
import { IPizza, IpizzaOption } from "./login.context";
import { api } from "../services/api";
import { IPizzaOptionFormData } from "../components/forms/pizzaOptionForm";

interface IPizzaProvider {
  children: React.ReactNode;
}

interface IPizzaContext {
  pizzas: IPizza[] | undefined;
  openMPizza: boolean
  setOpenMPizza: React.Dispatch<React.SetStateAction<boolean>>
  currentPizza: IPizza | null
  setCurrentPizza: React.Dispatch<React.SetStateAction<IPizza | null>>
  modalPizza: boolean
  setModalPizza: React.Dispatch<React.SetStateAction<boolean>>
  createPizzaOption: (formdata: IPizzaOptionFormData, id: number) => Promise<void>
  pizzaOption: IpizzaOption[] 
  setPizzaOption: React.Dispatch<React.SetStateAction<IpizzaOption[]>>

}
export const PizzaContext = createContext({} as IPizzaContext);

export const PizzaProvider = ({ children }: IPizzaProvider) => {
  const [pizzas, setPizzas] = useState<IPizza[]>();
  const[openMPizza,setOpenMPizza]=useState(false)
const[currentPizza, setCurrentPizza]= useState<IPizza|null>(null)
const [modalPizza,setModalPizza]=useState(false)
const [pizzaOption,setPizzaOption]=useState<IpizzaOption[]>([])


  const getAllPizzas = async () => {
    const userLogado = JSON.parse(localStorage.getItem("@USER")!);

    try {
      const response = await api.get("/pizza");
     const companyPizzas=response.data.filter((pizza:IPizza)=>{
      return pizza.company.id == userLogado.userType.id
     })
      setPizzas(companyPizzas);
    } catch (error) {
      console.log(error);
    }

  };

  const createPizzaOption=async(formdata:IPizzaOptionFormData, id:number)=>{

    try {

      const response=await api.post(`/pizzaOption/${id}`,formdata)
     
     
      setPizzaOption([...pizzaOption,response.data])
      
    } catch (error) {
      console.error(error)
      
    }

  }
  useEffect(() => {
    getAllPizzas();
  }, []);

  return (
    <PizzaContext.Provider value={{ pizzas,openMPizza,setOpenMPizza,currentPizza,setCurrentPizza,modalPizza,setModalPizza,createPizzaOption,pizzaOption,setPizzaOption
    }}>{children}</PizzaContext.Provider>
  );
};
