import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RecoilRoot>
    <ToastContainer limit={3} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
  // </React.StrictMode>
);
