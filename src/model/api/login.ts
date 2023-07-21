import api from "./api";
import { LoginRequest } from "../../types/login";

const baseURL = "user/login";

export const verifyUser = async (user: LoginRequest): Promise<{}> => {
  const response = await api.post(baseURL, user);

  if ("id" in response && "token" in response) {
    const { id, token } = response;

    localStorage.setItem("id", String(id));
    localStorage.setItem("token", String(token));

    return { id, token };
  } else {
    throw response;
  }
};
