import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Dashboard.jsx";
import AddDataPage from "./pages/AddDataPage.jsx";
import EditDataPage from "./pages/EditDataPage.jsx";
import DashboardFromJson from "./pages/DashboardFromJson.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/dashboardalt",
    element: <DashboardFromJson />,
  },
  {
    path: "/add",
    element: <AddDataPage />,
  },
  {
    path: "/edit/:id",
    element: <EditDataPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
