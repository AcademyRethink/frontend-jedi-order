import { useState, useEffect } from "react";
import { FormValues, FailureData, FailureType } from "../types/charts";
import {
  fetchFailureTypes,
  fetchFailureData,
} from "../model/api/failureCommunicationChartBar";

export function useFailureTypes(): FailureType[] {
  const [failureTypes, setFailureTypes] = useState<FailureType[]>([]);

  useEffect(() => {
    fetchFailureTypes()
      .then((data) => setFailureTypes(data))
      .catch((error) => console.error("Error fetching failure types:", error));
  }, []);

  return failureTypes;
}

export function useFailureData(formData: FormValues): FailureData[] {
  const [failureData, setFailureData] = useState<FailureData[]>([]);

  useEffect(() => {
    fetchFailureData(formData)
      .then((data) => setFailureData(data))
      .catch((error) => console.error("Error fetching failure data:", error));
  }, [formData]);

  return failureData;
}
