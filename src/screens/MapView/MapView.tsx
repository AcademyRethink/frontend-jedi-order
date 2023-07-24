import "./styles.css";
import Map from "../../components/Map";
import LocomotiveModal from "../../components/LocomotiveModal";
import useMapViewController from "./MapViewController";
import LocomotiveStatusSubtitle from "../../components/LocomotiveStatusSubtitle";

const Mapa = () => {
  const {
    center,
    statusSubtitles,
    globalState,
    handleClickOnLocomotiveMarker,
    handleCloseModal,
    modalDetails,
  } = useMapViewController();

  return (
    <div className="map-view-screen">
      <div className="map-screen">
        <div className="locomotive-modal" tabIndex={1}>
          {modalDetails.isOpen && modalDetails.locomotive && (
            <LocomotiveModal
              locomotiveName={modalDetails.locomotive.name}
              locomotiveDriver={modalDetails.locomotive.driverName}
              locomotiveLoad={modalDetails.locomotive.load}
              locomotiveStatus={modalDetails.locomotive.status}
              locomotiveRoute={modalDetails.locomotive_route}
              onClick={handleCloseModal}
              aria-label="Detalhes da Locomotiva"
            />
          )}
        </div>
        <div className="full-map-wrapper" tabIndex={2}>
          <Map
            center={center}
            locomotivesRouteDetails={globalState.locomotivesRouteDetails}
            onMarkerClick={handleClickOnLocomotiveMarker}
            aria-label="Mapa de Localização das Locomotivas"
          />
        </div>

        <div className="locomotive-status-subtitle" tabIndex={3}>
          {statusSubtitles &&
            statusSubtitles.map((statusSubtitle, index) => {
              return (
                <LocomotiveStatusSubtitle
                  key={index}
                  icon={statusSubtitle.icon}
                  border={statusSubtitle.border}
                  iconAltText={statusSubtitle.iconAltText}
                  text={statusSubtitle.text}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Mapa;
