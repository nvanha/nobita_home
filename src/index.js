import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import "./sass/reset.css";
import "./assets/font-awesome-4.7.0/css/font-awesome.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./sass/index.scss";

import Layout from "./components/Layout/Layout";

// Redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import Reducers from "./reducers/index";

const store = createStore(Reducers);

ReactDOM.render(
  <Provider store={store}>
    <Layout />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
