import React from "react";
import { StyledParagraph, StyledTitle } from "../../styles/typography";
import { StyledButton } from "../../styles/buttons";
import charizard from "../../assets/Charizard.png";

const MainBanner = () => {
  return (
    <div>
      <div className="flexGrid">
        <div className="content">
          <StyledTitle tag="h1" fontSize="lg" fontWeigth={400}>
            Lorem, ipsum Pokeword
          </StyledTitle>
          <div className="priceBox">
            <StyledParagraph fontSize="md" opacity={1}>
              <strong> R$ 299,87</strong>
            </StyledParagraph>
            <StyledButton buttonStyle="solid" buttonSize="lg">
              Comprar
            </StyledButton>
          </div>
        </div>
        <div className="imageGrid">
          <img src={charizard} alt="Charizard" />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
