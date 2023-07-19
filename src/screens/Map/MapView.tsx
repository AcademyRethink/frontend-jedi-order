import { GoogleMap } from "@react-google-maps/api";
import "./styles.css";
import Marker from "../../components/Marker";
import SideBar from "../../components/SideBar";
import LocomotiveModal from "../../components/LocomotiveModal";
import useMapViewController from "./MapViewController";

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
              handleOnClick={handleCloseModal}
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
                  handleOnClick={() =>
                    handleClickOnLocomotiveMarker(locomotive)
                  }
                />
              );
            })}
        </GoogleMap>
        <div className="locomotive-status-subtitle">
          <div className="locomotive-status-subtitle-item first-status-child">
            <img
              src="./marker-running.svg"
              alt="Marcador locomotiva em movimento"
            />
            <h4>
              Em<br></br>movimento
            </h4>
          </div>
          <div className="locomotive-status-subtitle-item">
            <img
              src="./marker-stopped.svg"
              alt="Marcador locomotiva em movimento"
            />
            <h4>
              Locomotiva<br></br>parada
            </h4>
          </div>
          <div className="locomotive-status-subtitle-item">
            <img
              src="./marker-maintenance.svg"
              alt="Marcador locomotiva em movimento"
            />
            <h4>
              Em<br></br>manutenção
            </h4>
          </div>
          <div className="locomotive-status-subtitle-item">
            <img
              src="./marker-problem.svg"
              alt="Marcador locomotiva em movimento"
            />
            <h4>
              Problema de<br></br>equipagem
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mapa;
