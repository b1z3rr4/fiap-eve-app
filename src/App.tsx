import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./presentation/routes";
import { GlobalTheme } from "./application/libs/styling";
import { theme } from "./presentation/styles";
import { ProfileProvider } from "./presentation/contexts/ProfileContext";
import { AppBar } from "./presentation/components/features/AppBar";
import { AuthProvider } from "./presentation/contexts/AuthContext";
import { ToastContainer } from "react-toastify";

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
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ProfileProvider>
    </GlobalTheme>
  );
}

export default App;
