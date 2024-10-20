import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./reportWebVitals";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

performance.mark("InitialRender");
root.render(<App />);
performance.measure("Root initial render", "InitialRender");
