import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

// HashRouter uses the hash portion of the URL (e.g. /#/projects) to keep track of the application state.
// This is useful for deployment on GitHub Pages, as it doesn't require server-side configuration.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
