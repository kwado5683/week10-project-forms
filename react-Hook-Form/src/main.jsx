import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BadApp from "./BadApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BadApp />
  </StrictMode>
);
