import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoute } from "./presentation/routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoute />
    </BrowserRouter>
  );
}

export default App;
