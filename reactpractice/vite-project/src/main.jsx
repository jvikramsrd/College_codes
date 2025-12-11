import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Child from "./child";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Child />
  </StrictMode>,
);
