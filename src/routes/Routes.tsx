import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateRoutesLayout from "../layouts/PrivateRoutesLayout";
import Dashboard from "../pages/Dashboard";
import Registers from "../pages/UserRegisters";
import Home from "../pages/Home copy";
import Login from "../pages/Login";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      element: <PrivateRoutesLayout />,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "meus-registros",
          element: <Registers />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
