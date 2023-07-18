import { useCallback } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import locomotiveAPI from "./api/locomotives";
import { LocomotiveFilterOptions } from "../types/locomotives";

const useLocomotiveModel = () => {
  const { setGlobalState } = useGlobalContext();

  const getLocomotives = useCallback(async () => {
    const locomotives = await locomotiveAPI.fetchAllLocomotives();
    const routes = await locomotiveAPI.fetchRoutes();
    const locomotivesPosition = await locomotiveAPI.fetchLocomotivesPosition();
    const locomotivesOverview = await locomotiveAPI.fetchLocomotivesOverview();

    setGlobalState((prevState) => ({
      ...prevState,
      locomotivesData: locomotives,
      routesData: routes,
      locomotivesRouteDetails: locomotivesPosition,
      locomotivesOverviewData: locomotivesOverview,
    }));
  }, [setGlobalState]);

  const getFilteredLocomotives = useCallback(
    async (filter: LocomotiveFilterOptions) => {
      const filteredLocomotives = await locomotiveAPI.fetchFilteredLocomotives(
        filter
      );
      setGlobalState((prevState) => ({
        ...prevState,
        locomotivesData: filteredLocomotives,
      }));
    },
    [setGlobalState]
  );

  return {
    getLocomotives,
    getFilteredLocomotives,
  };
};

export default useLocomotiveModel;
