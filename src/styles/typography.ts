import styled, { css } from "styled-components";
import BaseTitle from "./components/typography";

export const StyledTitle = styled(BaseTitle)`
  font-family: "Poppins", sans-serif;
  font-weight: ${({ fontWeigth }) => fontWeigth};
  color: ${({ theme }) => theme.colors.white};
  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 44px;
        `;
      case "md":
        return css`
          font-size: 20px;
        `;
      case "sm":
        return css`
          font-size: 16px;
        `;
    }
  }};
`;

interface iStyledParagraph {
  opacity?: number;
  fontSize?: "lg" | "md" | "sm";
}
export const StyledParagraph = styled.p<iStyledParagraph>`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  font strong,
  b {
    font-weight: 700;
  }
  opacity: ${({ opacity }) => (opacity ? opacity : 0.5)};
  ${({ fontSize }) => {
    switch (fontSize) {
      case "lg":
        return css`
          font-size: 20px;
        `;
      case "md":
        return css`
          font-size: 16px;
        `;
      case "sm":
        return css`
          font-size: 14px;
        `;
    }
  }};
`;

interface iStyledTag {
  backgroundColor?: "blue" | "red";
}
export const StyledTag = styled.span<iStyledTag>`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 400;
  height: 34px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  ${({ backgroundColor, theme }) => {
    switch (backgroundColor) {
      case "blue":
        return css`
          background: ${theme.colors.blue};
        `;
      case "red":
        return css`
          background: ${theme.colors.red};
        `;
    }
  }};
`;
