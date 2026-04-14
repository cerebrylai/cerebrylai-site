import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PromptPacksPage from "./PromptPacksPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/systems" element={<PromptPacksPage />} />
        <Route path="/prompt-packs" element={<PromptPacksPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);