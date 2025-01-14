import { useLocation } from "react-router-dom";
import { RounterMain } from "./routes/RouterMian";
import { GlobalStyles } from "./styles/GlobalStyle";
import { NavBar } from "./components/navbar";
import { Header } from "./components/header";
import { StyledContainer } from "./styles/grid";

const App = () => {
  const path = useLocation().pathname;

  const fantayName = "pizzarossa";
  return (
    <div className="app">
      <GlobalStyles />
      {path != "/" && path != `/cardapio/${fantayName}` ? <Header /> : null}

<StyledContainer>

      <div className="principal_box">
        {path != "/" && path != `/cardapio/${fantayName}` ? <NavBar /> : null}
        
        <RounterMain />
      </div>
</StyledContainer>
    </div>
  );
};

export default App;
