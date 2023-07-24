import { getUserById } from "../../model/api/myAccount";
import { User } from "../../types/user";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useLoginViewModel from "../../viewmodel/useLoginViewModel";

const useMyAccountView = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [user, setUser] = useState<User>({
    name: "",
    email: "",
    permission: false,
    active: true,
    password: "",
  });
  const [userId, setUserId] = useState("");
  const { unauthenticateUser } = useLoginViewModel();

  useEffect(() => {
    const id = localStorage.getItem("id");
    setUserId(id ?? "");
    getUserById(id).then((resp) => {
      setUser(resp);
    });
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
    userId,
    user,
    isModalOpen,
  };
};

export default useMyAccountView;
