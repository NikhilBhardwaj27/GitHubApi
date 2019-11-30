import ReactDOM from "react-dom";
import React from "react";
import App from "./App.js";
import { Provider } from "react-redux";
import store from "./store";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
