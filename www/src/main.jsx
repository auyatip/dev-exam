import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import GetById from "./components/getById.jsx";
import Create from "./components/create.jsx";
import Edit from "./components/edit.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/readid/:id",
    element: <GetById />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/edit/:id",
    element: <Edit />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
