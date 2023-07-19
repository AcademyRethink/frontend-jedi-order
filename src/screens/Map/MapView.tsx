import { GoogleMap } from "@react-google-maps/api";
import "./styles.css";
import Marker from "../../components/Marker";
import SideBar from "../../components/SideBar";
import LocomotiveModal from "../../components/LocomotiveModal";
import useMapViewController from "./MapViewController";
import LocomotiveStatusSubtitle from "../../components/LocomotiveStatusSubtitle";

const Mapa = () => {
  const {
    center,
    globalState,
    handleClickOnLocomotiveMarker,
    handleCloseModal,
    isLoaded,
    modalDetails,
  } = useMapViewController();

  if (!isLoaded || !globalState.locomotivesRouteDetails)
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  return (
    <div className="map-view-screen">
      <SideBar />
      <div className="map-screen">
        <div className="locomotive-modal">
          {modalDetails.isOpen && modalDetails.locomotive && (
            <LocomotiveModal
              locomotiveName={modalDetails.locomotive.name}
              locomotiveDriver={modalDetails.locomotive.driverName}
              locomotiveLoad={modalDetails.locomotive.load}
              locomotiveStatus={modalDetails.locomotive.status}
              locomotiveRoute={modalDetails.locomotive_route}
              onClick={handleCloseModal}
            />
          )}
        </div>

        <GoogleMap
          zoom={10}
          center={center}
          mapContainerClassName="map-container"
        >
          {globalState.locomotivesRouteDetails &&
            globalState.locomotivesRouteDetails.map((locomotive) => {
              return (
                <Marker
                  key={locomotive.id}
                  locomotive={locomotive}
                  onClick={() => handleClickOnLocomotiveMarker(locomotive)}
                />
              );
            })}
        </GoogleMap>
        <div className="locomotive-status-subtitle">
          <LocomotiveStatusSubtitle
            icon="./marker-running.svg"
            border
            iconAltText="Marcador locomotiva em movimento"
            text={
              <>
                Em <br /> movimento
              </>
            }
          />
          <LocomotiveStatusSubtitle
            icon="./marker-stopped.svg"
            iconAltText="Marcador locomotiva parada"
            text={
              <>
                Locomotiva <br /> parada
              </>
            }
          />
          <LocomotiveStatusSubtitle
            icon="./marker-maintenance.svg"
            iconAltText="Marcador locomotiva em manutenção"
            text={
              <>
                Em <br /> manutenção
              </>
            }
          />
          <LocomotiveStatusSubtitle
            icon="./marker-problem.svg"
            iconAltText="Marcador locomotiva com problema de equipagem"
            text={
              <>
                Problema de <br /> equipagem
              </>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Mapa;
