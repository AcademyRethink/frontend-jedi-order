import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home/LocomotivesView";
import Mapa from "../screens/Map/MapView";
import ErrorScreen from "../screens/ErrorScreen";
import LoginScreen from "../screens/LoginScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  // {
  //   path: "/center-panel",
  //   element: <CenterPanel />,
  // },
  // {
  //   path: "/analysis",
  //   element: <Analysis />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
  // {
  //   path: "/my-account",
  //   element: <MyAccount />,
  // },
  {
    path: "/map",
    element: <Mapa />,
  },
]);
