import { useParams } from "react-router-dom";

export const ProductPage = () => {
  const { name } = useParams(); // Parâmetro da URL (nome do produto passado dinamicamente)
  


  return (
    <>
      <h1>Product</h1>

      <p>Oi, o nome do produto é: {name}</p> 
    </>
  )
}
