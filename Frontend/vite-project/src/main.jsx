import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Fix import for BrowserRouter
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

const root = document.getElementById("root"); // Corrected function call

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AuthProvider>
      <div className="dark:bg-slate-900 dark:text-white">
        <App />
      </div>
    </AuthProvider>
  </BrowserRouter>
);
export default App;
