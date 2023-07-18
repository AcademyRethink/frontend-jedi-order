import { useLoadScript } from "@react-google-maps/api";
import { useMemo, useState } from "react";
import {
  LocomotiveDTO,
  LocomotiveRoutePositionDTO,
} from "../../types/locomotives";
import { useGlobalContext } from "../../context/GlobalContext";
import { useLocomotivesPosition } from "../../hooks/useLocomotivesPosition";

const useMapViewController = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_API_KEY!,
  });

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

  useLocomotivesPosition();

  const center = useMemo(
    () => ({
      lat: -19.83282,
      lng: -43.84451000000001,
    }),
    []
  );

  const handleClickOnLocomotiveMarker = (
    locomotive: LocomotiveRoutePositionDTO
  ) => {
    const locomotiva = globalState.locomotivesData?.find(
      (locomotiva) => locomotiva.id === locomotive.id
    );
    setModalDetails({
      isOpen: true,
      locomotive_id: locomotive.id,
      locomotive: locomotiva,
      locomotive_route: locomotive.routeName,
    });
  };

  const handleCloseModal = () => {
    setModalDetails({
      isOpen: !modalDetails.isOpen,
      locomotive_id: modalDetails.locomotive_id,
      locomotive: modalDetails.locomotive,
      locomotive_route: modalDetails.locomotive_route,
    });
  };

  return {
    isLoaded,
    modalDetails,
    globalState,
    center,
    handleClickOnLocomotiveMarker,
    handleCloseModal,
  };
};

export default useMapViewController;
