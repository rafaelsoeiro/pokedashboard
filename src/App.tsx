import { StyledTitle, StyledParagraph } from "./styles/typography";

function App() {
  return (
    <div>
      <StyledTitle tag="h1" fontSize="lg" fontWeigth={400}>
        Pokedashboard
      </StyledTitle>
      <StyledParagraph fontSize="md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum fuga cum,
        veritatis natus similique, ad illo error possimus tempore consectetur ab
        modi omnis! Saepe iure consequatur modi sit molestiae voluptas!
      </StyledParagraph>
    </div>
  );
}

export default App;
