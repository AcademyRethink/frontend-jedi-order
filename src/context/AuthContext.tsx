import { ReactNode, createContext, useState, useContext } from "react";
import { LoginSuccessful } from "../types/login";

interface AuthContextType {
  isLoggedIn: boolean;
  login: ({ id, token }: LoginSuccessful) => void;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = ({ id, token }: LoginSuccessful) => {
    setIsLoggedIn(true);
    localStorage.setItem("id", id);
    localStorage.setItem("token", token);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("id");
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider.");
  }
  return context;
};
