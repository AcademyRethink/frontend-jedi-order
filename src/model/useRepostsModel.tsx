import { useState } from "react";
import reportsAPI from "./api/reports";
import { ReportType } from "../types/reports";

const useReportsModel = () => {
  const [reports, setReports] = useState<ReportType[]>([]);
  const getLastFourReports = async () => {
    const lastFourReports = await reportsAPI.fetchLastFourReports();
    setReports(lastFourReports);
    return lastFourReports;
  };
  return { getLastFourReports, reports };
};

export default useReportsModel;
