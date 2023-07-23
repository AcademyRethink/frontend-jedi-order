import { verifyUser } from "../model/api/login";
import { LoginFailed, LoginRequest, LoginSuccessful } from "../types/login";

const useLoginModel = () => {
  const loginUser = async (
    user: LoginRequest
  ): Promise<LoginSuccessful | LoginFailed> => {
    const response = await verifyUser(user);
    return response;
  };

  return {
    loginUser,
  };
};

export default useLoginModel;
