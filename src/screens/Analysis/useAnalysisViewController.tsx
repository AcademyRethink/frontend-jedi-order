import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useCommunicationReportsViewModel from "../../viewmodel/useCommunicationReportsViewModel";
import { FormValues } from "../../types/charts";

const useAnalysisViewController = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    failureData,
    failureDataCount,
    failureTypes,
    getFailureData,
    getFailureDataCount,
    getFailureTypes,
  } = useCommunicationReportsViewModel();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    navigate("/analise");
  };

  useEffect(() => {
    getFailureTypes();
  }, []);

  return {
    closeModal,
    openModal,
    isModalOpen,
    failureData,
    failureDataCount,
    failureTypes,
    getFailureData,
    getFailureDataCount,
    getFailureTypes,
  };
};

export default useAnalysisViewController;
