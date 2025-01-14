import styled, { css } from "styled-components";

export const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  gap: 10px;
  border: 1.5px solid;

  ${({ color }: any) => {
    switch (color) {
      case "primary":
        return css`
          background-color: var(--color-brand2);
          border-color: var(--color-brand2);
          color: var(--color-withe-fixed);
          &:hover {
            background-color: var(--color-grey-1);
            border-color: var(--color-grey-1);
          }
        `;

      case "confirm":
        return css`
          background-color: var(--color-sucess-1);
          border-color: var(--color-sucess-1);
          color: var(--color-withe-fixed);
          &:hover {
            background-color: var(--color-sucess-2);
            border-color: var(--color-sucess-2);
          }
        `;
      case "cancel":
        return css`
          background-color: var(--color-alert-1);
          border-color: var(--color-alert-1);
          color: var(--color-withe-fixed);
          &:hover {
            background-color: var(--color-alert-2);
            border-color: var(--color-alert-2);
          }
        `;
    }
  }}
`;

export const StyledBigButton = styled.button`
  ${buttonStyles}
  padding: 12px 28px;
  height: 48px;
  /* width: 146px; */
`;

export const StyledMediunButton = styled.button`
  ${buttonStyles}
  padding: 12px 15px;
  height: 38px;
  /* width: 119px; */
`;
