import { useCallback } from "react";
import reportsAPI from "./api/reports";
import { useGlobalContext } from "../context/GlobalContext";
import { ReportType } from "../types/reports";

const useReportsModel = () => {
  const { setGlobalState } = useGlobalContext();

  const getLastFourReports = useCallback(async () => {
    const reports: ReportType[] = await reportsAPI.fetchLastFourReports();

    setGlobalState((prevState) => ({
      ...prevState,
      lastFourReports: reports,
    }));
  }, [setGlobalState]);

  return { getLastFourReports };
};

export default useReportsModel;
