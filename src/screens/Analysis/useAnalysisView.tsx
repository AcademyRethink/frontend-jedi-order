import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const useAnalysisView = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/analise");
  };

  return {
    closeModal,
    openModal,
    isModalOpen,
  };
};

export default useAnalysisView;
