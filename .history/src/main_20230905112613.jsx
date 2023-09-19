import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {AuthContextProvider} from "./context/auth-context.jsx";
import { RestaurantsContextProvider } from "./context/restaurants-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RestaurantsContextProvider>
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthContextProvider>
);
