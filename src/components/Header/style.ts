import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  .userMenu {
    display: flex;
    align-items: center;
    gap: 1rem;
    img {
      width: 50px;
      height: 50px;
      object-fit: cover;
    }
    button {
      color: ${({ theme }) => theme.colors.white};
      transition: all ease-in-out 400ms;
      &:hover {
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }
  @media (max-width: 600px) {
    flex-direction: column-reverse;
    .userMenu {
      width: 100%;
      justify-content: flex-end;
    }
  }
`;

export const StyledHeaderForm = styled.form`
  display: inline-flex;
  align-items: center;
  padding: 0 1rem;
  height: 59px;
  background: ${({ theme }) => theme.colors.white20};
  border-radius: 10px;
  gap: 1rem;

  input {
    font-family: "Poppins", sans-serif;
    font-size: 16px;
    font-weight: 700;
    background: transparent;
    border: none;
    width: 100%;
    max-width: 373px;
    color: ${({ theme }) => theme.colors.white};
    ::placeholder {
      ${({ theme }) => theme.colors.white50};
    }
  }
  button {
    color: ${({ theme }) => theme.colors.white50};
    transition: 0.4s;
    &:hover {
      color: ${({ theme }) => theme.colors.white};
    }
  }
  @media (max-width: 600px) {
    input {
      height: 52px;
    }
  }
`;
