import { createBrowserRouter } from "react-router-dom";
import Mapa from "../screens/Map/MapView";
import ErrorScreen from "../screens/ErrorScreen";
import LoginScreen from "../screens/LoginScreen";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginScreen />,
    errorElement: <ErrorScreen />,
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
