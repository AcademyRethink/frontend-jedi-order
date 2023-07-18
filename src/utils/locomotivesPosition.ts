import { LocomotiveRoutePositionDTO } from "../types/locomotives";

export const movelocomotivesPosition = (
  locomotivesPosition: LocomotiveRoutePositionDTO[] | undefined
) => {
  if (locomotivesPosition) {
    for (let i = 0; i < locomotivesPosition.length; i++) {
      if (locomotivesPosition[i].status !== "Em movimento") continue;
      locomotivesPosition[i].index +=
        locomotivesPosition[i].direction === "up" ? 1 : -1;

      if (
        (locomotivesPosition[i].index === locomotivesPosition[i].maxIndex &&
          locomotivesPosition[i].direction === "up") ||
        (locomotivesPosition[i].index === 1 &&
          locomotivesPosition[i].direction === "down")
      ) {
        locomotivesPosition[i].direction =
          locomotivesPosition[i].direction === "up" ? "down" : "up";
      }
    }
  }
  return locomotivesPosition;
};
