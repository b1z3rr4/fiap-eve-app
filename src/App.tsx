import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./presentation/routes";
import { GlobalTheme } from "./application/libs/styling";
import { theme } from "./presentation/styles";

function App() {
  return (
    <GlobalTheme theme={theme}>
      <BrowserRouter>
        <AppRoute />
      </BrowserRouter>
    </GlobalTheme>
  );
}

export default App;
