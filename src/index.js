import React from "react";
import ReactDOM from "react-dom";
import App from "./Containers/App";
import "./Style/style.css"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import "../node_modules/@fortawesome/react-fontawesome";
import "../node_modules/@fortawesome/free-solid-svg-icons";
import { Provider } from "react-redux";
import store from "../src/Redux/store"

const app = (
  <Provider store={store}>
      <App />
  </Provider>
);

ReactDOM.render(app, document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
