import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./presentation/routes";
import { GlobalTheme } from "./application/libs/styling";
import { theme } from "./presentation/styles";
import { ProfileProvider } from "./presentation/contexts/ProfileContext";
import { AppBar } from "./presentation/components/features/AppBar";
import { AuthProvider } from "./presentation/contexts/AuthContext";

function App() {
  return (
    <GlobalTheme theme={theme}>
      <ProfileProvider>
        <BrowserRouter>
          <AuthProvider>
            <AppBar />
            <AppRoute />
          </AuthProvider>
        </BrowserRouter>
      </ProfileProvider>
    </GlobalTheme>
  );
}

export default App;
