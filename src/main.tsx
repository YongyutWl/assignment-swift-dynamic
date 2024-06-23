import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import store from "./store/store";
import { Provider } from "react-redux";
import NotFound from "./NotFound.tsx";
import Assignment1 from "./components/assignment1/index.tsx";
import Assignment2 from "./components/assignment2/index.tsx";
// import { BrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/assignment1",
    element: <Assignment1 />,
  },
  {
    path: "/assignment2",
    element: <Assignment2 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* <BrowserRouter basename="/rococo-scone-581322"> */}
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>
);
