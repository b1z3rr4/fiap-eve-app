import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./presentation/routes";
import { GlobalTheme } from "./application/libs/styling";
import { theme } from "./presentation/styles";
import { ProfileProvider } from "./presentation/contexts/ProfileContext";

function App() {
  return (
    <GlobalTheme theme={theme}>
      <ProfileProvider>
        <BrowserRouter>
          <AppRoute />
        </BrowserRouter>
      </ProfileProvider>
    </GlobalTheme>
  );
}

export default App;
