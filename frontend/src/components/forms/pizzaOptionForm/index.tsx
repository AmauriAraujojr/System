import { useContext, useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { IPizza } from "../../../providers/login.context";
import { PizzaContext } from "../../../providers/pizza.context";
import { StyledFormPizzaOption } from "./styles";
import { Body500, Body700, HeadingOne700h } from "../../../styles/tiphograpy";

export interface IPizzaOptionFormData {
  size: string;
  halfAndHalf: boolean;
  pizza: IPizza;
  halfOptions: IPizza;
  borda:any
    
  }

export const PizzaOptionForm = () => {
  const { register, handleSubmit } = useForm<IPizzaOptionFormData>({
    defaultValues: {
      size: "",
    },
  });

  const {
    currentPizza,
    createPizzaOption,
    setModalPizza,
    setPizzaOption,
    pizzaOption,
    pizzas,
  } = useContext(PizzaContext);

  const [openSelect, setOpenSelect] = useState(false);
  const [halfOptions, setHalfOptions] = useState<IPizza>();
  const [borda, setBorda]=useState({sabor:"",price:""})


    let priceTotal=""
if(halfOptions){


    if (Number(currentPizza?.price_G) > Number(halfOptions.price_G)) {
      let sum = Number(currentPizza?.price_G) + Number(borda.price);
      priceTotal = String(sum);
    } else if (Number(currentPizza?.price_G) < Number(halfOptions.price_G)) {
      let sum = Number(halfOptions.price_G) + Number(borda.price);

      priceTotal = String(sum);
    } else {
      let sum = Number(currentPizza?.price_G) + Number(borda.price);

      priceTotal = String(sum);
    }}
//     if (Number(pizza.price_M) > Number(pizza2.price_M)) {
//       let sum = Number(pizza.price_M) + Number(payload.borda.price);
//       priceTotal = String(sum);
//     } else if (Number(pizza.price_M) < Number(pizza2.price_M)) {
//       let sum = Number(pizza2.price_M) + Number(payload.borda.price);
//       priceTotal = String(sum);
//     } else {
//       let sum = Number(pizza.price_M) + Number(payload.borda.price);
//       priceTotal = String(sum);
//     }
//     if (Number(pizza.price_P) > Number(pizza2.price_P)) {
//       let sum = Number(pizza.price_P) + Number(payload.borda.price);

//       priceTotal = String(sum);
//     } else if (Number(pizza.price_P) < Number(pizza2.price_P)) {
//       let sum = Number(pizza2.price_P) + Number(payload.borda.price);
//       priceTotal = String(sum);
//     } else {
//       let sum = Number(pizza.price_P) + Number(payload.borda.price);

//       priceTotal = String(sum);
//     }
//   }
else{
  let sum = Number(currentPizza?.price_G) + Number(borda.price);

  priceTotal = String(sum);

}


  const submit: SubmitHandler<IPizzaOptionFormData> = (formData) => {
    formData.pizza = currentPizza!;
    formData.halfOptions = halfOptions!;
    formData.borda = borda
     
    
    
    createPizzaOption(formData, currentPizza!.id);
    console.log(formData);
  };
  const closeAndSetPizzaOption = () => {
    setPizzaOption([]);
    setModalPizza(false);
  };
  useEffect(() => {
    console.log(pizzaOption)
  }, [openSelect,pizzaOption]);

  
  return (
    <StyledFormPizzaOption>
      <div className="current_pizza">
        <HeadingOne700h>{currentPizza?.name}</HeadingOne700h>
        <Body500>{currentPizza?.description}</Body500>

        <form onSubmit={handleSubmit(submit)}>
         
          <div className="size_content">
            <Body700>Meio a Meio?</Body700>
            <input
              onClick={() => setOpenSelect(!openSelect)}
              type="checkbox"
              {...register("halfAndHalf")}
            />
          </div>

          <Body500 className="desc">
            Pizzas meio a meio será cobrado pelo valor maior!
          </Body500>

          {openSelect ? (
            <div className="half_options">
              <Body700>Escolha a segunda metade:</Body700>
              {pizzas?.map((pizza: IPizza) => {
                return (
                  <div
                    key={pizza.id}
                    className="half_pizza"
                    onClick={() => setHalfOptions(pizza)}
                  >
                    <Body500>1/2 {pizza.name} </Body500>
                    <Body500 className="desc">{pizza.description}</Body500>
                  </div>
                );
              })}
            </div>
          ) : null}

         <div>

            {currentPizza?.borda.map((borda:any)=>{
              return <div onClick={()=> setBorda(borda)} key={borda.name}> 
                <Body500>{borda.sabor}</Body500>
                <Body500>{borda.price}</Body500>

              </div>
            })}
         </div>

<div className="size_box">
            <div className="size_content">
              <Body700> Grande</Body700>
              <Body500>R$: {Number(priceTotal).toFixed(2)}</Body500>

              <input
                type="radio"
                value="Grande"
                {...register("size")} //
              />
            </div>

            <div className="size_content">
              <Body700> Média</Body700>
              <Body500>R$: {Number(currentPizza?.price_M).toFixed(2)}</Body500>

              <input type="radio" value="Média" {...register("size")} />
            </div>
            <div className="size_content">
              <Body700>Pequena</Body700>
              <Body500>R$: {Number(currentPizza?.price_P).toFixed(2)}</Body500>

              <input type="radio" value="Pequena" {...register("size")} />
            </div>
          </div>

          <div className="box_button">
            <button>
              {" "}
              <Body700 onClick={() => closeAndSetPizzaOption()}>
                Cancelar
              </Body700>
            </button>
            <button type="submit">
              <Body700>Próximo</Body700>{" "}
            </button>
          </div>
        </form>
      </div>
    </StyledFormPizzaOption>
  );
};
