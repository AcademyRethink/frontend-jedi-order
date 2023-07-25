import api from "./api";
import { LoginFailed, LoginRequest, LoginSuccessful } from "../../types/login";

const baseURL = "user/login";

export const verifyUser = async (
  user: LoginRequest
): Promise<LoginSuccessful | LoginFailed> => {
  const response: LoginSuccessful | LoginFailed = await api.post(baseURL, user);
  return response;
};
