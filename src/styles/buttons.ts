import styled, { css } from "styled-components";

interface iStyledButtonProps {
  buttonSize: "lg" | "md" | "sm";
  buttonStyle: "solid" | "outline";
}

export const StyledButton = styled.button<iStyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-family: "poppins", sans-serif;
  font-size: 17px;
  transition: all ease-in-out 0.25s;

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "lg":
        return css`
          padding: 0 2rem;
          height: 69px;
        `;
      case "md":
        return css`
          padding: 0 1.5rem;
          height: 46px;
        `;
      case "sm":
        return css`
          padding: 0 1.0rem;
          height: 42px;
        `;
    }
  }};

  ${({ buttonStyle, theme }) => {
    switch (buttonStyle) {
      case "solid":
        return css`
          background: ${theme.colors.blue};
          color: ${theme.colors.white};
        `;
      case "outline":
        return css`
          background: transparent;
          color: ${theme.colors.white};
          border: 1px solid ${theme.colors.blue};
          &:hover {
            background: ${theme.colors.blue};
          }
        `;
    }
  }}
  &:hover {
    filter: brightness(1.1);
    box-shadow: 0px 4px 25px rgba(255, 249, 249, 0.2);
  }
`;
