import useMyAccountModel from "../model/useMyAccountModel";

const useMyAccountViewModel = () => {
  const { fetchUserById } = useMyAccountModel();
  return { fetchUserById };
};

export default useMyAccountViewModel;
