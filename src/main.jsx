import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import Home from "./Pages/Home/Index.jsx";
import NewRecipe from "./Pages/NewRecipe/Index.jsx";
import Recipe from "./Pages/Recipe/Index.jsx";
import ChangeRecipe from "./Pages/ChangeRecipe/Index.jsx";
import Login from "./Pages/Login/Index.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/recipe/",
    element: <App />,
    children: [
      {
        path: "/recipe/",
        element: <Home />,
      },
      {
        path: "/recipe/newRecipe",
        element: <NewRecipe />,
      },
      {
        path: "/recipe/:id",
        element: <Recipe />,
      },
      {
        path: "/recipe/update/:id",
        element: <ChangeRecipe />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
