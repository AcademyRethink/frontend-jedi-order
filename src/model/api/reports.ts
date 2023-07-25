import api from "./api";

const baseURL = "communication-reports/";

const fetchLastFourReports = async (): Promise<any[]> => {
  const response: any[] = await api.get(baseURL + "last-four");
  return response;
};

const reportsAPI = {
  fetchLastFourReports,
};

export default reportsAPI;
