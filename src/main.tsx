import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Errorpage } from "./pages/errorpage";
import { Home } from "./pages/home";
import { MostPopular } from "./pages/mostPopular";
import { CryptoNotices } from "./pages/cryptoNotices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/mostpopular",
        element: <MostPopular />,
      },
      {
        path: "/cryptonotices",
        element: <CryptoNotices />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
