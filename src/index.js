import React from "react";
import ReactDOM from "react-dom";
import App from "./Containers/App";
import "./Style/style.css"
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter } from "react-router-dom";


const app = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
);

ReactDOM.render(app, document.querySelector("#root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
