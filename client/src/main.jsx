import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import getJobs from "./services/request.js";

import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import JobsList from "./pages/JobsList.jsx";
import WorkDetails from "./pages/WorkDetail.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    element: <App />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: getJobs,
      },
      {
        path: "/jobs/:search",
        element: <JobsList />,
        loader: getJobs,
      },
      {
        path: "/jobs/details/:id",
        element: <WorkDetails />,
        loader: getJobs,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
