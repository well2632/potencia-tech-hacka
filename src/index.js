import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import Dashboard from "./pages/Dashboard";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Modules from "./pages/Modules";
import Module from "./pages/Module";
import Course from "./pages/Course";
import Cases from "./pages/Cases";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/modulos",
    element: <Modules />,
  },
  {
    path: "/modulos/:module",
    element: <Module />,
  },
  {
    path: "/modulos/:module/:course",
    element: <Course />,
  },
  {
    path: "/cases",
    element: <Cases />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
