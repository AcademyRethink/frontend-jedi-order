import { useCallback } from "react";
import useLocomotiveViewModel from "../../viewmodel/useLocomotiveViewModel";

const useLocomotiveViewController = () => {
  const {
    locomotives,
    getLocomotives,
    getFilteredLocomotives,
    locomotivesOverview,
    getLocomotivesOverview,
  } = useLocomotiveViewModel();

  const onSeeLocomotivesClick = useCallback(async () => {
    await getLocomotives();
  }, [getLocomotives]);

  const onFilterLocomotivesClick = useCallback(async () => {
    await getFilteredLocomotives({ status: "running" });
  }, [getFilteredLocomotives]);

  const onSeeLocomotivesOverviewClick = useCallback(async () => {
    await getLocomotivesOverview();
  }, [getLocomotivesOverview]);

  return {
    locomotives,
    onSeeLocomotivesClick,
    onFilterLocomotivesClick,
    onSeeLocomotivesOverviewClick,
    locomotivesOverview,
  };
};

export default useLocomotiveViewController;
