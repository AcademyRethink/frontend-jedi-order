import api from "./api";
import { User } from "../../types/user";

const baseURL = "user/myAccount/";

export const getUserById = async (id: string | null): Promise<User> => {
  const response: User = await api.get(`${baseURL}${id}`);

  return response;
};
