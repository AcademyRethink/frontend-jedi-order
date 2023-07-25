import { useState } from "react";
import communicationReportsAPI from "./api/communicationReports";
import {
  FailureData,
  FailureDataMonth,
  FailureType,
  FormValues,
  ReportsFilteredByDays,
} from "../types/charts";
import { useGlobalContext } from "../context/GlobalContext";

const useCommunicationReportsModel = () => {
  const { setGlobalState } = useGlobalContext();
  const [failureData, setfailureData] = useState<FailureData[]>([]);
  const [failureDataCount, setfailureDataCount] = useState<FailureDataMonth[]>(
    []
  );
  const [failureFilteredByDays, setFailureFilteredByDays] = useState<
    ReportsFilteredByDays[]
  >([]);

  const getFailureTypes = async () => {
    const foundFailureTypes: FailureType[] =
      await communicationReportsAPI.fetchFailureTypes();
    setGlobalState((prevState) => ({
      ...prevState,
      failureTypes: foundFailureTypes,
    }));
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

  const getFilteredFailuresByDays = async (days: number) => {
    const failureByDays =
      await communicationReportsAPI.fetchFailuresBySubjectAndDays(days);
    setFailureFilteredByDays(failureByDays);
    return failureByDays;
  };

  return {
    getFailureTypes,
    getFailureData,
    failureData,
    getFailureDataCount,
    failureDataCount,
    getFilteredFailuresByDays,
    failureFilteredByDays,
  };
};

export default useCommunicationReportsModel;
