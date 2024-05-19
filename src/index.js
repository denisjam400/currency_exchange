import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/Main.css";
import Cur from "./Cur";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Cur />
    </BrowserRouter>
  </React.StrictMode>
);
