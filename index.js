import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./Utils/Store";

const ele = document.getElementById("root");
const root = ReactDOM.createRoot(ele);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
