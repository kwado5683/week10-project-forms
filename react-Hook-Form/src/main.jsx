import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BadApp from "./form-codingch.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BadApp />
  </StrictMode>
);
