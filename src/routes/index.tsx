import { createBrowserRouter, Routes, Route } from "react-router-dom";
import Mapa from "../screens/Map/MapView";
import CenterPanel from "../screens/CenterPanel/CenterPanel";
import LoginView from "../screens/LoginView/LoginView";
import MyAccountView from "../screens/MyAccountView/MyAccountView";
import ChangePasswordView from "../screens/ChangePassword/ChangePasswordView";

const AuthenticatedRoutes = () => (
  <Routes>
    <Route path="/painel-central" element={<CenterPanel />} />
    <Route path="/mapa" element={<Mapa />} />
    {/* <Route path="/analise" element={<Analysis/>}/> */}
    <Route path="/minha-conta" element={<MyAccountView/>}/> 
    <Route path="/alterar-senha/:id" element={<ChangePasswordView/>}/> 

  </Routes>
);

const NonAuthenticatedRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginView />} />
  </Routes>
);

export const router = createBrowserRouter([
  {
    path: "/auth/*",
    element: <NonAuthenticatedRoutes />,
  },
  {
    path: "/*",
    element: <AuthenticatedRoutes />,
  },
]);
