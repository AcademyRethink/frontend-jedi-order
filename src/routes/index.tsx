import { createBrowserRouter } from "react-router-dom";
import Home from "../screens/Home/LocomotivesView";
import Mapa from "../screens/Map/MapView";
import ErrorScreen from "../screens/ErrorScreen";
import CenterPanel from "../screens/CenterPanel/CenterPanel";
import LoginView from "../screens/LoginView/LoginView";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorScreen />,
  },
  {
    path: "/user/login",
    element: <LoginView />,
  },
  {
    path: "/center-panel",
    element: <CenterPanel />,
  },
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
