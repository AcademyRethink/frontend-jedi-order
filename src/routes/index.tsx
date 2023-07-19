import { createBrowserRouter } from "react-router-dom";
import Mapa from "../screens/Map/MapView";
import CenterPanel from "../screens/CenterPanel/CenterPanel";
import LoginView from "../screens/LoginView/LoginView";
import MyAccountView from "../screens/MyAccountView/MyAccountView";

export const router = createBrowserRouter([
  {
    path: "/usuario/login",
    element: <LoginView />,
  },
  {
    path: "/center-panel",
    element: <CenterPanel />,
  },
  {
    path: "/map",
    element: <Mapa />,
  },
  // {
  //   path: "/analysis",
  //   element: <Analysis />,
  // },
  // {
  //   path: "/contact",
  //   element: <Contact />,
  // },
  {
    path: "/minhaConta",
    element: <MyAccountView />,
  },
  {
    path: "/map",
    element: <Mapa />,
  },
]);
