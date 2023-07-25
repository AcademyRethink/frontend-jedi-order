import api from "./api";
import {
  FailureType,
  FormValues,
  FailureData,
  FailureDataMonth,
  ReportsFilteredByDays,
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
    communicationReportsBaseURL + "/filterbysubjectid/" + selectedFailureType
  );
  return response;
};

const fetchFailuresBySubjectAndDays = async (
  days: number
): Promise<ReportsFilteredByDays[]> => {
  const response: ReportsFilteredByDays[] = await api.get(
    communicationReportsBaseURL + "/filterbysubjectanddays/" + days
  );
  return response;
};

const communicationReportsAPI = {
  fetchFailureData,
  fetchFailureDataCount,
  fetchFailureTypes,
  fetchFailuresBySubjectAndDays,
};

export default communicationReportsAPI;
