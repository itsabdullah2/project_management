import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AppStateProvider } from "./context/AppStateContext";
import { Provider } from "react-redux";
import { store } from "./store";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <AppStateProvider>
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </LocalizationProvider>
    </Provider>
  </AppStateProvider>
);
