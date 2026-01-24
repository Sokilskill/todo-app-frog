import { PersistGate } from "redux-persist/integration/react";
import { StrictMode } from "react";
import { Provider } from "react-redux";

import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import store, { persistor } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <PersistGate loading={<p>Loading...</p>} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </StrictMode>
);
