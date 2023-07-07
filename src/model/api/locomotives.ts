import api from "./api";
import {
  LocomotiveFilterOptions,
  LocomotiveOverview,
} from "../../types/locomotives";

export interface LocomotiveDTO {
  id: number;
  driverName: string;
  load: string;
  maneuverer: string;
  name: string;
  route: string;
  status: string;
}

const baseURL = "locomotives/";

export const fetchAllLocomotives = async (): Promise<LocomotiveDTO[]> => {
  const response: LocomotiveDTO[] = await api.get(baseURL);
  return response;
};

export const fetchFilteredLocomotives = async ({
  status = "",
  load = "",
  locomotiveName = "",
}: LocomotiveFilterOptions): Promise<LocomotiveDTO[]> => {
  const response: LocomotiveDTO[] = await api.get(
    baseURL +
      `filter?status=${status}&load=${load}&locomotiveName=${locomotiveName}`
  );
  return response;
};

export const fetchLocomotivesOverview = async () => {
  const response: LocomotiveOverview = await api.get(baseURL + "overview");
  return response;
};
