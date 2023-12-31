import { Routes, Route, Navigate } from "react-router-dom";
import Mapa from "../screens/MapView/MapView";
import CenterPanel from "../screens/CenterPanelView/CenterPanelView";
import LoginView from "../screens/LoginView/LoginView";
import MyAccountView from "../screens/MyAccountView/MyAccountView";
import ChangePasswordView from "../screens/ChangePassword/ChangePasswordView";
import Analysis from "../screens/Analysis/AnalysisView";
import SideBar from "../components/SideBar";
import "./styles.css";
import ErrorScreen from "../screens/ErrorScreen";

const AuthenticatedRoutes = () => (
  <div className="default-app-screen">
    <SideBar />
    <div className="default-screen-container">
      <Routes>
        <Route path="/painel-central" element={<CenterPanel />} />
        <Route path="/mapa" element={<Mapa />} />
        <Route path="/analise" element={<Analysis />} />
        <Route path="/minha-conta" element={<MyAccountView />} />
        <Route path="/trocar-senha" element={<ChangePasswordView />} />
        <Route path="/erro" element={<ErrorScreen />} />
        <Route path="/*" element={<Navigate to="/painel-central" />} />
      </Routes>
    </div>
  </div>
);

const NonAuthenticatedRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginView />} />
    <Route path="/*" element={<Navigate to="/auth/login" />} />
  </Routes>
);

export const getRoutes = (isLoggedIn: boolean) => {
  return [
    {
      path: "/auth/*",
      element: isLoggedIn ? (
        <Navigate to="/painel-central" />
      ) : (
        <NonAuthenticatedRoutes />
      ),
    },
    {
      path: "/*",
      element: isLoggedIn ? (
        <AuthenticatedRoutes />
      ) : (
        <Navigate to="/auth/login" />
      ),
    },
  ];
};
