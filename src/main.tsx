import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import React from "react";
import "./index.css";

import { router, store } from "@/app";
import { RouterProvider } from "react-router-dom";

const domNode = document.getElementById("root") as HTMLElement;
const root = createRoot(domNode);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
