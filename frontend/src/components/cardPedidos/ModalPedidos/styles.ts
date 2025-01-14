import styled from "styled-components";

export const StyledNewModalBox = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;

  display: flex;
  align-items: top;
  justify-content: center;

  .modal {
    position: relative;
    width: 100%;
    max-width: 574px;
    background: var(--color-withe-fixed);
    padding: 16px;
    border-radius: 8px;
    top: 80px;
    overflow: auto;
    overflow-x: hidden;
    max-height: 60vh;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: var(--color-grey-1);
    .price {
      padding: 5px;
      align-self: flex-end;
    }

    .size{
      margin-bottom:7px;
      display:flex;
      align-items: center;
      gap:3px;
    }

    .total {
      background: var(--color-brand2);
    }
    .pizza_options {
      display: flex;
      flex-direction: column;
      background-color: var(--color-grey-8);
      gap: 5px;
      padding: 5px;
    }
    .desc {
      font-size: 0.73rem;
      color: var(--color-grey-2);
    }
    .products_options {
      display: flex;
      flex-direction: column;
      gap: 5px;
      background-color: var(--color-grey-8);
      padding: 5px;
    }
    .box_entrega {
      display: flex;
      align-items: center;
      width: 100%;
      justify-content: space-between;
    }
    .closeButton {
      /* position: absolute; */
      right: 5px;
      top: 5px;
      color: var(--color-withe-fixed);
      font-weight: 900;
      font-size: 1.125rem;
      padding: 5px 10px;
      border-radius: 100px;
      cursor: pointer;
      background-color: var(--color-brand1);
      border: 1px solid var(--color-brand1);
      :hover {
        opacity: 1;
      }
    }

    .box_one {
      display: flex;
      width: 100%;
      justify-content: space-between;
    }
    .cliente_box {
      display: flex;
      flex-direction: column;
      gap: 15px;
      .name_box {
        display: flex;
        justify-content: space-between;
      }
      .address_box {
        text-align: center;
        font-size: 0.73rem;
        color: var(--color-grey-2);
      }
    }
  }
`;
