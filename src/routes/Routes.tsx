import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
  ]);
  return <RouterProvider router={router} />;
};

export default Routes;
