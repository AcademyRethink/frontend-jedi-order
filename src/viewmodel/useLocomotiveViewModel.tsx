import useLocomotiveModel from "../model/useLocomotiveModel";

const useLocomotiveViewModel = () => {
  const {
    locomotives,
    getLocomotives,
    getFilteredLocomotives,
    locomotivesOverview,
    getLocomotivesOverview,
  } = useLocomotiveModel();

  return {
    locomotives,
    getLocomotives,
    getFilteredLocomotives,
    locomotivesOverview,
    getLocomotivesOverview,
  };
};

export default useLocomotiveViewModel;
