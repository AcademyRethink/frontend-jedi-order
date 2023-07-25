import { useGlobalContext } from "../context/GlobalContext";
import { User } from "../types/user";
import { getUserById } from "./api/myAccount";

const useMyAccountModel = () => {
  const { setGlobalState } = useGlobalContext();

  const fetchUserById = async (id: string | undefined): Promise<User> => {
    const user: User = await getUserById(id);
    setGlobalState((prevState) => ({
      ...prevState,
      user,
    }));

    return user;
  };

  return {
    fetchUserById,
  };
};

export default useMyAccountModel;
