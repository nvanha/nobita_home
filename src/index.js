import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "./sass/reset.css";
import "./assets/font-awesome-4.7.0/css/font-awesome.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./sass/index.scss";

import Layout from "./components/Layout/Layout";

ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();