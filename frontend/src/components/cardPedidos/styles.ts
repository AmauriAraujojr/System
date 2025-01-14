import styled from "styled-components";

export const StyledCardPedidos = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 20px;
  background-color: var(--color-grey-8);
  border: 1px solid var(--color-grey-8);
  border-radius: 5px;
  &:hover {
    border: 1px solid var(--color-brand2);
    box-shadow: 1px 1px var(--color-brand2);
  }
  .box_type {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .Entrega {
      background: var(--color-brand2);
      padding: 5px;
    }
    .Retirada {
      background: var(--color-brand1);
      padding: 5px;
    }
    .open {
      color: var(--color-brand3);
      font-size: 1.3rem;
      cursor: pointer;
    }
  }
  .box_client {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .box_address {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  select {
    background: none;
    padding: 5px;
  }
`;
