import useReportsModel from "../model/useRepostsModel";

const useReportsViewModel = () => {
  const { getLastFourReports } = useReportsModel();
  return { getLastFourReports };
};

export default useReportsViewModel;
