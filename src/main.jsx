import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./routes/dashboard";
import Highlight from "./routes/highlight";

const router = createBrowserRouter([
  {
    path: "/project1/",
    element: <Dashboard />,
  },
  {
    path: "/project1/highlight",
    element: <Highlight />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
