import { useEffect, useMemo } from "react";
import { useGlobalContext } from "../../context/GlobalContext";
import { useLocomotivesPosition } from "../../hooks/useLocomotivesPosition";
import useReportsViewModel from "../../viewmodel/useReportsViewModel";
import "./styles.css";

const useCenterPanelViewController = () => {
  useLocomotivesPosition();
  const { globalState } = useGlobalContext();
  const { getLastFourReports, reports } = useReportsViewModel();

  const center = useMemo(
    () => ({
      lat: -19.476989,
      lng: -42.58734,
    }),
    []
  );

  useEffect(() => {
    getLastFourReports();
  }, []);

  return {
    globalState,
    reports,
    center,
  };
};

export default useCenterPanelViewController;
