import styled from "styled-components";

export const StyledPedidosControls=styled.section`
 display: flex;
  width: 100%;
  height: 91.5vh;
  justify-content:space-between;
  padding:30px;
  gap: 30px;
  .pedidos_box{
    display: flex;
    height:90%;
    padding:10px;
    width:33%;
    gap:5px;
    overflow-y:auto;
    border-radius:5px;
    flex-direction: column;
    .title{
      display: flex;
      align-items: center;
      justify-content:center;
      border-bottom: 1px solid var(--color-brand2);
      width: 100%;
      padding: 10px;
      color:var(--color-withe-fixed)
    }
  }
  .pend{
    background: var(--color-alert-1);
    border:1px solid var(--color-alert-1);
    box-shadow: 2px 2px 16px  var(--color-alert-1)

  }
  .acept{
background: var(--color-grey-5);
border:1px solid var(--color-grey-5);
box-shadow: 2px 2px 16px  var(--color-grey-5)

  }
  .concl{
    background: var(--color-sucess-1);
    border:1px solid var(--color-sucess-1);
    box-shadow: 2px 2px 16px  var(--color-sucess-1)
  }



`