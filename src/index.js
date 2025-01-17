import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/css/style.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./config/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
