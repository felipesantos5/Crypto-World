import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Errorpage } from "./routes/errorpage";
import { CryptoList } from "./routes/cryptoList";
import { CryptoNotices } from "./routes/cryptoNotices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        path: "/",
        element: <CryptoList />,
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
