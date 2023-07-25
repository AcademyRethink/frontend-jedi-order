import useLoginModel from "../model/useLoginModel";
import { LoginRequest } from "../types/login";
import { useAuthContext } from "../context/AuthContext";
import { useGlobalContext } from "../context/GlobalContext";

const useLoginViewModel = () => {
  const { loginUser } = useLoginModel();
  const { login, logout } = useAuthContext();
  const { setGlobalState } = useGlobalContext();

  const authenticateUser = async (user: LoginRequest) => {
    const response = await loginUser(user);
    if ("id" in response && "token" in response) {
      const { id, token } = response;

      setGlobalState((prevState) => ({
        ...prevState,
        userId: id,
      }));

      login({ id: String(id), token });
    } else {
      throw new Error(response.message);
    }
  };

  const unauthenticateUser = () => {
    logout();
  };

  return {
    authenticateUser,
    unauthenticateUser,
  };
};

export default useLoginViewModel;
