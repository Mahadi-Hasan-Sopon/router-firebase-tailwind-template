import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home/Home";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Demo from "../components/Demo/Demo";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/demo", element: <Demo /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
]);

export default routes;
