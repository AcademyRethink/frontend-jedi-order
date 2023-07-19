import useReportsModel from "../model/useRepostsModel";

const useReportsViewModel = () => {
  const { getLastFourReports, reports } = useReportsModel();
  return { getLastFourReports, reports };
};

export default useReportsViewModel;
