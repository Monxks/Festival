import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import './main.css'
import Clarity from '@microsoft/clarity';

const root = document.getElementById("root");
const projectId = "vfumm138kt"

Clarity.init(projectId);

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>,
);
