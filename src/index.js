import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.scss";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./reducers"

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider>
    <App />
  </Provider>
);
