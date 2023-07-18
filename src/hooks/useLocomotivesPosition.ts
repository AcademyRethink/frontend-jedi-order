import { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { movelocomotivesPosition } from "../utils/locomotivesPosition";
import { useInterval } from "./useInterval";
import useLocomotiveModel from "../model/useLocomotiveModel";

export const useLocomotivesPosition = () => {
  const { globalState, setGlobalState } = useGlobalContext();
  const { getLocomotives } = useLocomotiveModel();

  const simulateLocomotives = () => {
    const result = movelocomotivesPosition(globalState.locomotivesRouteDetails);
    if (result) {
      setGlobalState((prevState) => ({
        ...prevState,
        locomotivesRouteDetails: result,
      }));
    }
  };

  useInterval(simulateLocomotives, 20000);

  useEffect(() => {
    getLocomotives();
  }, [getLocomotives]);
};
