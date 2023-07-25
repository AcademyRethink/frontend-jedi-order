import React, { ReactNode, useState, createContext } from "react";
import {
  LocomotiveDTO,
  LocomotiveRoutePositionDTO,
  RoutesDTO,
  LocomotiveOverviewDTO,
} from "../types/locomotives";
import { ReportType } from "../types/reports";
import { User } from "../types/user";
import { FailureType } from "../types/charts";

interface GlobalState {
  locomotivesData: LocomotiveDTO[] | undefined;
  locomotivesOverviewData: LocomotiveOverviewDTO | undefined;
  routesData: RoutesDTO | undefined;
  locomotivesRouteDetails: LocomotiveRoutePositionDTO[] | undefined;
  lastFourReports: ReportType[] | undefined;
  userId: string | undefined;
  user: User | undefined;
  failureTypes: FailureType[] | undefined;
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
    lastFourReports: undefined,
    userId: undefined,
    user: undefined,
    failureTypes: undefined,
  },
  setGlobalState: () => {},
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [globalState, setGlobalState] = useState<GlobalState>({
    locomotivesData: undefined,
    locomotivesOverviewData: undefined,
    routesData: undefined,
    locomotivesRouteDetails: undefined,
    lastFourReports: undefined,
    userId: undefined,
    user: undefined,
    failureTypes: undefined,
  });

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(GlobalContext);
