export type Locomotive = {
  id: number;
  driverName: string;
  load: string;
  maneuverer: string;
  name: string;
  route: string;
  status: string;
};

export type LocomotiveFilterOptions = {
  status?: "running" | "stopped" | "maintenance" | "";
  load?: string;
  locomotiveName?: string;
};

export type LocomotiveOverview = {
  totalLocomotive: number;
  maintenance: number;
  running: number;
  stopped: 2;
};
