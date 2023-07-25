import useCommunicationReportsModel from "../model/useCommunicationReportsModel";

const useCommunicationReportsViewModel = () => {
  const {
    failureData,
    failureDataCount,
    failureFilteredByDays,
    getFailureData,
    getFailureDataCount,
    getFailureTypes,
    getFilteredFailuresByDays,
  } = useCommunicationReportsModel();
  return {
    failureData,
    failureDataCount,
    failureFilteredByDays,
    getFailureData,
    getFailureDataCount,
    getFailureTypes,
    getFilteredFailuresByDays,
  };
};

export default useCommunicationReportsViewModel;
