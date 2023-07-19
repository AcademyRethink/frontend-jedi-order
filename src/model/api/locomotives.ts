import api from "./api";
import {
  LocomotiveDTO,
  LocomotiveFilterOptions,
  LocomotiveOverviewDTO,
  LocomotiveRoutePositionDTO,
  RoutesDTO,
} from "../../types/locomotives";

const locomotivesBaseURL = "locomotives/";
const routesBaseURL = "routes/";

const fetchAllLocomotives = async (): Promise<LocomotiveDTO[]> => {
  const response: LocomotiveDTO[] = await api.get(locomotivesBaseURL);
  return response;
};

const fetchFilteredLocomotives = async ({
  status = "",
  load = "",
  locomotiveName = "",
}: LocomotiveFilterOptions): Promise<LocomotiveDTO[]> => {
  const response: LocomotiveDTO[] = await api.get(
    locomotivesBaseURL +
      `filter?status=${status}&load=${load}&locomotiveName=${locomotiveName}`
  );
  return response;
};

const fetchLocomotivesOverview = async (): Promise<LocomotiveOverviewDTO> => {
  const response: LocomotiveOverviewDTO = await api.get(
    locomotivesBaseURL + "overview"
  );
  return response;
};

const fetchRoutes = async (): Promise<RoutesDTO> => {
  const response: RoutesDTO = await api.get(routesBaseURL);
  return response;
};

const fetchLocomotivesPosition = async (): Promise<
  LocomotiveRoutePositionDTO[]
> => {
  const response: LocomotiveRoutePositionDTO[] = await api.get(
    routesBaseURL + "locomotivePosition"
  );
  return response;
};

const fetchLocomotivesData = {
  fetchAllLocomotives,
  fetchFilteredLocomotives,
  fetchLocomotivesOverview,
  fetchRoutes,
  fetchLocomotivesPosition,
};

export default fetchLocomotivesData;
