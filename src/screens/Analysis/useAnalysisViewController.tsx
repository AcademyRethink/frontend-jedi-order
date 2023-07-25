import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useCommunicationReportsViewModel from "../../viewmodel/useCommunicationReportsViewModel";
import { useGlobalContext } from "../../context/GlobalContext";

const useAnalysisViewController = () => {
  const { globalState } = useGlobalContext();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    failureData,
    failureDataCount,
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
    if (globalState.failureTypes === undefined) getFailureTypes();
  }, []);

  return {
    closeModal,
    openModal,
    isModalOpen,
    failureData,
    failureDataCount,
    failureTypes: globalState.failureTypes,
    getFailureData,
    getFailureDataCount,
    getFailureTypes,
  };
};

export default useAnalysisViewController;
