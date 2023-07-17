import api from "./api";
import { LoginRequest } from "../../types/login";

const baseURL = "user/login";

export const verifyUser = async (user: LoginRequest): Promise<void> => {
  const response = await api.post(baseURL, user);
  localStorage.setItem("token", String(response));
};
