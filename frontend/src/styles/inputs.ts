import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  max-width:100%;
  box-sizing: border-box;
  .error{
    color:var(--color-alert-1)
  }

  input {
    width: 315px;
    max-width: 100%;
    height: 48px;
    border: 1.5px solid var(--color-grey-8);
    border-radius: 4px;
    padding: 0 16px;
    &::placeholder {
      color: var(--color-grey-3);
    }
    &:hover {
      background-color: var(--color-grey-8);
    }
    &:focus {
      background-color: var(--color-grey-9);
      outline: 1.5px solid var(--color-brand2);
      &::-webkit-input-placeholder {
        color: transparent;
      }
    }
  }
`;
export const StyledTextArea = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  .error{
    color:var(--color-alert-1)
  }
  textarea {
    width: 315px;
    max-width: 100%;
    height: 80px;
    border: 1.5px solid var(--color-grey-8);
    border-radius: 4px;
    padding: 16px;
    resize: none;
    &::placeholder {
      color: var(--color-grey-3);
      font-family:'inter', sans-serif;
    }
    &:hover {
      background-color: var(--color-grey-8);
    }
    &:focus {
      background-color: var(--color-grey-9);
      outline: 1.5px solid var(--color-brand2);
      &::-webkit-input-placeholder {
        color: transparent;
      }
    }
  }
`;
export const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
  select {
    background-color: transparent;
    width: 315px;
    max-width: 100%;
    height: 48px;
    border: 1.5px solid var(--color-grey-8);
    border-radius: 4px;
    padding: 0 16px;
    color: var(--color-grey-3);

    &:hover {
      background-color: var(--color-grey-8);
    }
    &:focus {
      background-color: var(--color-grey-9);
      outline: 1.5px solid var(--color-brand2);
      &::-webkit-input-placeholder {
        color: transparent;
      }
    }
  }
`;