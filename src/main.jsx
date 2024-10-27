import React from "react";
import ReactDOM from "react-dom/client";
import { HelloWorldApp } from "./HelloWorldApp";
import './style.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelloWorldApp title="Hola, soy krilin" subtitle="Juro no volver a morir" />
  </React.StrictMode>
);
