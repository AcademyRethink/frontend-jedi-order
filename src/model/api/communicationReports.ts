import api from "./api";
import {
  FailureType,
  FormValues,
  FailureData,
  FailureDataMonth,
} from "../../types/charts";

const failureTypesBaseURL = "failure-types/";
const communicationReportsBaseURL = "communication-reports/";

const fetchFailureTypes = async (): Promise<FailureType[]> => {
  const response: FailureType[] = await api.get(failureTypesBaseURL);
  return response;
};

const fetchFailureData = async (
  formData: FormValues
): Promise<FailureData[]> => {
  const response: FailureData[] = await api.post(
    communicationReportsBaseURL + "countbytimeinterval",
    formData
  );
  return response;
};

const fetchFailureDataCount = async (
  selectedFailureType: number
): Promise<FailureDataMonth[]> => {
  const response: FailureDataMonth[] = await api.get(
    communicationReportsBaseURL + selectedFailureType
  );
  return response;
};

const communicationReportsAPI = {
  fetchFailureData,
  fetchFailureDataCount,
  fetchFailureTypes,
};

export default communicationReportsAPI;
