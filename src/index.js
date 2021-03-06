import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store";

import App from "./binding/App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Provider store={store}>  
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>

);
