import "./styles.css";
import Map from "../../components/Map";
import SideBar from "../../components/SideBar";
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

        <Map
          center={center}
          locomotivesRouteDetails={globalState.locomotivesRouteDetails}
          onMarkerClick={handleClickOnLocomotiveMarker}
        />

        <div className="locomotive-status-subtitle">
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
