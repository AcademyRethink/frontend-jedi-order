import { useCallback, useMemo, useState } from "react";
import {
  LocomotiveDTO,
  LocomotiveRoutePositionDTO,
} from "../../types/locomotives";
import { useGlobalContext } from "../../context/GlobalContext";

const useMapViewController = () => {
  const [modalDetails, setModalDetails] = useState<{
    isOpen: boolean;
    locomotive_id: number;
    locomotive: LocomotiveDTO | undefined;
    locomotive_route: string;
  }>({
    isOpen: false,
    locomotive_id: 0,
    locomotive: undefined,
    locomotive_route: "",
  });

  const { globalState } = useGlobalContext();

  const center = useMemo(
    () => ({
      lat: -19.83282,
      lng: -43.84451000000001,
    }),
    []
  );

  const statusSubtitles = [
    {
      icon: "./marker-running.svg",
      iconAltText: "Marcador locomotiva em movimento",
      text: "Em movimento",
      border: true,
    },
    {
      icon: "./marker-stopped.svg",
      iconAltText: "Marcador locomotiva parada",
      text: "Locomotiva\nparada",
      border: false,
    },
    {
      icon: "./marker-maintenance.svg",
      iconAltText: "Marcador locomotiva em manutenção",
      text: "Em\nmanutenção",
      border: false,
    },
    {
      icon: "./marker-problem.svg",
      iconAltText: "Marcador locomotiva com problema de equipagem",
      text: "Problema\nde equipagem",
      border: false,
    },
  ];

  const handleClickOnLocomotiveMarker = (
    locomotive: LocomotiveRoutePositionDTO
  ) => {
    const locomotiva = globalState.locomotivesData?.find(
      (locomotiveToFind) => locomotiveToFind.id === locomotive.id
    );
    setModalDetails({
      isOpen: true,
      locomotive_id: locomotive.id,
      locomotive: locomotiva,
      locomotive_route: locomotive.routeName,
    });
  };

  const handleCloseModal = useCallback(() => {
    setModalDetails({
      isOpen: !modalDetails.isOpen,
      locomotive_id: modalDetails.locomotive_id,
      locomotive: modalDetails.locomotive,
      locomotive_route: modalDetails.locomotive_route,
    });
  }, [modalDetails]);

  return {
    modalDetails,
    globalState,
    center,
    statusSubtitles,
    handleClickOnLocomotiveMarker,
    handleCloseModal,
  };
};

export default useMapViewController;
