import useMyAccountViewModel from "../../viewmodel/useMyAccountViewModel";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useLoginViewModel from "../../viewmodel/useLoginViewModel";
import { useGlobalContext } from "../../context/GlobalContext";
import { useAuthContext } from "../../context/AuthContext";

const useMyAccountViewController = () => {
  const navigate = useNavigate();
  const { logout } = useAuthContext();
  const { fetchUserById } = useMyAccountViewModel();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { unauthenticateUser } = useLoginViewModel();
  const { globalState, setGlobalState } = useGlobalContext();

  useEffect(() => {
    const id = localStorage.getItem("id");
    if (globalState.userId === undefined) {
      setGlobalState((prevState) => ({
        ...prevState,
        userId: id ? id : undefined,
      }));
    }
    if (globalState.user === undefined && globalState.userId !== undefined)
      fetchUserById(globalState.userId);
    else logout();
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/minha-conta");
  };

  const handleLogout = () => {
    unauthenticateUser();
  };

  return {
    handleLogout,
    closeModal,
    openModal,

    isModalOpen,
  };
};

export default useMyAccountViewController;
