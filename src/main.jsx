import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppStateProvider } from "./context/AppStateContext";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <AppStateProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppStateProvider>
);
