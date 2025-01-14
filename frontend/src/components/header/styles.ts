import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 80px;
  border-bottom: 2px solid var(--color-brand2);
  background:linear-gradient(var(--color-brand1), var(--color-brand4) );
  
  .userData {
      display: flex;
      align-items:center;
  
  
     .h2{
      color:var(--color-brand2);
      display:none;
      font-family: "Playfair Display", serif;
      
    @media(min-width: 1470px){
    display:block; 
    
     }}
        img {
          width: 100px;
          max-height: 100%;
          border-radius: 5px;
        }
      }
    
  .flexBox {
    display: flex;
    height: 100%;
    width: 100%;
    justify-content: space-between;
    align-items:center;
    padding: 30px 30px 30px 0;
    color: var(--color-withe-fixed);
    
  button{
    padding:8px 20px ;
    background:linear-gradient(var(--color-brand4), var(--color-brand1));
    color: var(--color-withe-fixed);
    cursor:pointer;
    border: 1px solid var(--color-brand2);
    border-radius:3px;
    &:hover{
      color: var(--color-brand2);
    }
  }
 
}
`;
