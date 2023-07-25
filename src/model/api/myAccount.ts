import api from "./api";
import { User } from "../../types/user";

const baseURL = "user/myAccount/";

export const getUserById = async (id: string | undefined): Promise<User> => {
  const response: User = await api.get(`${baseURL}${id}`);

  return response;
};
