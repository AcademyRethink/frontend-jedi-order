import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { movelocomotivesPosition } from "../utils/locomotivesPosition";
import { useInterval } from "./useInterval";
import useLocomotiveViewModel from "../viewmodel/useLocomotiveViewModel";

export const useLocomotivesPosition = () => {
  const { globalState, setGlobalState } = useGlobalContext();
  const { getLocomotives } = useLocomotiveViewModel();

  const simulateLocomotives = () => {
    const result = movelocomotivesPosition(globalState.locomotivesRouteDetails);
    if (result) {
      setGlobalState((prevState) => ({
        ...prevState,
        locomotivesRouteDetails: result,
      }));
    }
  };

  useInterval(simulateLocomotives, 60000);

  useEffect(() => {
    if (globalState.locomotivesData === undefined) getLocomotives();
  }, [getLocomotives, globalState]);
};
