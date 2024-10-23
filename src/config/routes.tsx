import { Navigate, RouteObject } from "react-router-dom";
import { GALLERY, HOME, POD } from "./path";
import Home from "../pages/Home/Home";
import Gallery from "../pages/Gallery/Gallery";
import Pod from "../pages/POD/Pod";
import Applayout from "../layout/Applayout";

const AppRoutes: RouteObject = {
  path: "/",
  element: <Applayout />,
  children: [
    {
      path: HOME,
      element: <Home />,
    },
    {
      path: GALLERY,
      element: <Gallery />,
    },
    {
      path: POD,
      element: <Pod />,
    },
  ],
};

export const Routes: RouteObject[] = [
  { path: "/", element: <Navigate to={`/${HOME} `} /> },
  AppRoutes,
];
