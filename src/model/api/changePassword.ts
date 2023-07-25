import api from "./api";
import { ChangePassword } from "../../types/myAccount";

const baseURL = "user/";

export const changeAndVerifyPassword = async (
  password: ChangePassword
): Promise<void> => {
  const id = localStorage.getItem("id");
  const token = localStorage.getItem("token");

  await api.patch(baseURL + id, password, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
