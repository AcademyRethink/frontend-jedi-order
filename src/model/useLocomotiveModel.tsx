import { useCallback } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import {
  fetchAllLocomotives,
  fetchFilteredLocomotives,
  fetchLocomotivesOverview,
} from "./api/locomotives";
import { LocomotiveFilterOptions } from "../types/locomotives";

const useLocomotiveModel = () => {
  const { globalState, setGlobalState } = useGlobalContext();

  const locomotivesData = globalState.locomotivesData;
  const locomotivesOverviewData = globalState.locomotivesOverviewData;

  const getLocomotives = useCallback(async () => {
    const locomotives = await fetchAllLocomotives();
    setGlobalState((prevState) => ({
      ...prevState,
      locomotivesData: locomotives,
    }));
  }, [setGlobalState]);

  const getFilteredLocomotives = useCallback(
    async (filter: LocomotiveFilterOptions) => {
      const filteredLocomotives = await fetchFilteredLocomotives(filter);
      setGlobalState((prevState) => ({
        ...prevState,
        locomotivesData: filteredLocomotives,
      }));
    },
    [setGlobalState]
  );

  const getLocomotivesOverview = useCallback(async () => {
    const locomotivesOverview = await fetchLocomotivesOverview();
    setGlobalState((prevState) => ({
      ...prevState,
      locomotivesOverviewData: locomotivesOverview,
    }));
  }, [setGlobalState]);

  return {
    locomotives: locomotivesData,
    getLocomotives,
    getFilteredLocomotives,
    locomotivesOverview: locomotivesOverviewData,
    getLocomotivesOverview,
  };
};

export default useLocomotiveModel;
