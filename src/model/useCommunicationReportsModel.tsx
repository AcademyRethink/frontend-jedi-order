import { useState } from "react";
import communicationReportsAPI from "./api/communicationReports";
import {
  FailureData,
  FailureDataMonth,
  FailureType,
  FormValues,
} from "../types/charts";

const useCommunicationReportsModel = () => {
  const [failureTypes, setfailureTypes] = useState<FailureType[]>([]);
  const [failureData, setfailureData] = useState<FailureData[]>([]);
  const [failureDataCount, setfailureDataCount] = useState<FailureDataMonth[]>(
    []
  );

  const getFailureTypes = async () => {
    const foundFailureTypes = await communicationReportsAPI.fetchFailureTypes();
    setfailureTypes(foundFailureTypes);
    return foundFailureTypes;
  };

  const getFailureData = async (formData: FormValues) => {
    const foundFailureData = await communicationReportsAPI.fetchFailureData(
      formData
    );
    setfailureData(foundFailureData);
    return foundFailureData;
  };

  const getFailureDataCount = async (selectedFailureType: number) => {
    const numberOfFailureData =
      await communicationReportsAPI.fetchFailureDataCount(selectedFailureType);
    setfailureDataCount(numberOfFailureData);
    return numberOfFailureData;
  };

  return {
    getFailureTypes,
    failureTypes,
    getFailureData,
    failureData,
    getFailureDataCount,
    failureDataCount,
  };
};

export default useCommunicationReportsModel;
