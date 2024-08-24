import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppStateProvider } from "./context/AppStateContext";
import { Provider } from "react-redux";
import { store } from "./store";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <AppStateProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </AppStateProvider>
);
