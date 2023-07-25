export interface LocomotiveDTO extends LocomotiveStatusType {
  id: number;
  driverName: string;
  load: string;
  maneuverer: string;
  name: string;
  route: "route1" | "route2" | "route3";
}

export interface LocomotiveFilterOptions extends LocomotiveStatusType {
  load: string;
  locomotiveName: string;
}

export interface LocomotiveRoutePositionDTO extends LocomotiveStatusType {
  id: number;
  routeName: "route1" | "route2" | "route3";
  index: number;
  maxIndex: number;
  direction: "up" | "down";
}

export interface RoutesDTO {
  route1: { id: number; latitude: string; longitude: string }[];
  route2: { id: number; latitude: string; longitude: string }[];
  route3: { id: number; latitude: string; longitude: string }[];
}

export type LocomotiveStatusType = {
  status:
    | "Em movimento"
    | "Locomotiva parada"
    | "Em manutenção"
    | "Problema de equipagem"
    | "";
};

export type LocomotiveOverviewDTO = {
  totalLocomotive: number;
  "Em movimento": number;
  "Locomotiva parada": number;
  "Em manutenção": number;
  "Problema de equipagem": number;
};
