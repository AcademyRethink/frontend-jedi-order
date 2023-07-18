import useLocomotiveModel from "../model/useLocomotiveModel";

const useLocomotiveViewModel = () => {
  const { getLocomotives, getFilteredLocomotives } = useLocomotiveModel();

  return {
    getLocomotives,
    getFilteredLocomotives,
  };
};

export default useLocomotiveViewModel;
