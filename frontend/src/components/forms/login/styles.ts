import styled from "styled-components";

export const StyledFormLogin = styled.div`
  width: 500px;
  height: 600px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: var(--color-brand2);

  .img_box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* height:40%; */
    position: relative;
    h1 {
      position: absolute;
      bottom: -10px;
      font-size: 1.9rem;
      font-family: "Playfair Display", serif;

    }
    img {
      max-width: 70%;
      /* max-width: 350px; */
    }
  }

  @media (min-width: 600px) {
    border-radius: 50px;

    border: 2px solid var(--color-brand2);
  }
  form {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 50%;
    gap: 60px;
    button {
      cursor: pointer;
      border-radius: 5px;
      color: var(--color-withe-one);
      background: none;
      border: none;
      color: var(--color-withe-fixed);
      P{

        font-size: 1.3rem;
      }
      &:hover{
        color: var(--color-brand2)
      }
    }
    input {
      background: none;
      border: none;
      border-bottom: 2px solid var(--color-brand2);
    }
  }
`;
