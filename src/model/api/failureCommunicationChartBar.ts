import {
  FailureType,
  FormValues,
  FailureData,
  FailureDataMonth,
} from "../../types/charts";
import translateMonth from "../../utils/translateMonthsNames";

export async function fetchFailureTypes(): Promise<FailureType[]> {
  try {
    const response = await fetch("http://localhost:3000/failure-types");
    if (!response.ok) {
      throw new Error("Failed to fetch failure types.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching failure types:", error);
    return [];
  }
}

export async function fetchFailureData(
  formData: FormValues
): Promise<FailureData[]> {
  try {
    if (formData.startDate && formData.endDate && formData.failureType) {
      const response = await fetch(
        "http://localhost:3000/communication-reports/countbytimeinterval",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch failure data.");
      }
      const data = await response.json();
      return data;
    } else {
      return [];
    }
  } catch (error) {
    console.error("Error fetching failure data:", error);
    return [];
  }
}

export const fetchFailureDataCount = async (
  selectedFailureType: number
): Promise<FailureDataMonth[]> => {
  try {
    const response = await fetch(
      `http://localhost:3000/communication-reports/filterbysubjectid/${selectedFailureType}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching failure data:", error);
    return [];
  }
};
