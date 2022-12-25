import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./card-searchbox.css";
import Card-Searchbox-App from "./Card-Searchbox-App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Card-Searchbox-App />
  </StrictMode>
);
