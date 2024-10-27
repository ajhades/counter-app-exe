import React from "react";
import ReactDOM from "react-dom/client";
// import { HelloWorldApp } from "./HelloWorldApp";
import './styles.css';
import { CounterApp } from "./CounterApp";

ReactDOM.createRoot( document.getElementById('root')).render(
  <React.StrictMode>
    <CounterApp value={12}/>
  </React.StrictMode>
);

