import api from "./api";
import {
  FailureType,
  FormValues,
  FailureData,
  FailureDataMonth,
} from "../../types/charts";

const failureTypesBaseURL = "failure-types/";
const communicationReportsBaseURL = "communication-reports/";

export const fetchFailureTypes = async (): Promise<FailureType[]> => {
  const response: FailureType[] = await api.get(failureTypesBaseURL);
  console.log(response);
  return response;
};

export const fetchFailureData = async (
  formData: FormValues
): Promise<FailureData[]> => {
  const response: FailureData[] = await api.post(
    communicationReportsBaseURL + "countbytimeinterval",
    formData
  );
  console.log(response);
  return response;
};

export const fetchFailureDataCount = async (
  selectedFailureType: number
): Promise<FailureDataMonth[]> => {
  const response: FailureDataMonth[] = await api.get(
    communicationReportsBaseURL + "filterbysubjectid/" + selectedFailureType
  );
  console.log(response);
  return response;
};
