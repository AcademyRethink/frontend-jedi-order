import React, { ReactNode, useState, createContext } from "react";
import {
  LocomotiveDTO,
  LocomotiveRoutePositionDTO,
  RoutesDTO,
  LocomotiveOverviewDTO,
} from "../types/locomotives";

interface GlobalState {
  locomotivesData: LocomotiveDTO[] | undefined;
  locomotivesOverviewData: LocomotiveOverviewDTO | undefined;
  routesData: RoutesDTO | undefined;
  locomotivesRouteDetails: LocomotiveRoutePositionDTO[] | undefined;
}

const GlobalContext = createContext<{
  globalState: GlobalState;
  setGlobalState: React.Dispatch<React.SetStateAction<GlobalState>>;
}>({
  globalState: {
    locomotivesData: undefined,
    locomotivesOverviewData: undefined,
    routesData: undefined,
    locomotivesRouteDetails: undefined,
  },
  setGlobalState: () => {},
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [globalState, setGlobalState] = useState<GlobalState>({
    locomotivesData: undefined,
    locomotivesOverviewData: undefined,
    routesData: undefined,
    locomotivesRouteDetails: undefined,
  });

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(GlobalContext);
