import React, { ReactNode, useState } from "react";
import { LocomotiveOverview } from "../types/locomotives";
import { LocomotiveDTO } from "../model/api/locomotives";

interface GlobalState {
  locomotivesData: LocomotiveDTO[] | null;
  locomotivesOverviewData: LocomotiveOverview | null;
}

const GlobalContext = React.createContext<{
  globalState: GlobalState;
  setGlobalState: React.Dispatch<React.SetStateAction<GlobalState>>;
}>({
  globalState: {
    locomotivesData: null,
    locomotivesOverviewData: null,
  },
  setGlobalState: () => {},
});

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [globalState, setGlobalState] = useState<GlobalState>({
    locomotivesData: null,
    locomotivesOverviewData: null,
  });

  return (
    <GlobalContext.Provider value={{ globalState, setGlobalState }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(GlobalContext);
