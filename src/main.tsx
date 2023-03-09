import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import "./index.css";
import Test from "./Deck";
import { Header } from "./Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/decks/:deckId",
    element: <Test />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="page">
      <Header />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
