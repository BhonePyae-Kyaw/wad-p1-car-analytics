import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./routes/dashboard";
import Highlight from "./routes/highlight";

const router = createBrowserRouter([
  {
    path: "/wad-p1-car-analytics/",
    element: <Dashboard />,
  },
  {
    path: "/wad-p1-car-analytics/highlight",
    element: <Highlight />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
