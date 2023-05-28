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
import Lesson from "./pages/Lesson";
import Roadmap from "./pages/Roadmap";
import Case from "./pages/Case";
import Ranking from "./pages/Ranking";

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
    path: "/modulos/:module/roadmap",
    element: <Roadmap />,
  },
  {
    path: "/modulos/:module/:course/aula",
    element: <Lesson />,
  },
  {
    path: "/cases",
    element: <Cases />,
  },
  {
    path: "/cases/:Case",
    element: <Case />,
  },
  {
    path: "/ranking",
    element: <Ranking />,
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
