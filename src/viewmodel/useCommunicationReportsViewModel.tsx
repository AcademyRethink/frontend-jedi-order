import useCommunicationReportsModel from "../model/useCommunicationReportsModel";

const useCommunicationReportsViewModel = () => {
  const {
    failureData,
    failureDataCount,
    failureTypes,
    getFailureData,
    getFailureDataCount,
    getFailureTypes,
  } = useCommunicationReportsModel();
  return {
    failureData,
    failureDataCount,
    failureTypes,
    getFailureData,
    getFailureDataCount,
    getFailureTypes,
  };
};

export default useCommunicationReportsViewModel;
