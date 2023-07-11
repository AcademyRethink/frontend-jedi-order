import AdministrativeLocomotive from "../../components/AdministrativeLocomotive";
import AdmLocomotive from "../../components/AdministrativeLocomotive"
import FailureHistory from "../../components/FailureHistory";
import MapCenterPanel from "../../components/MapCenterPanel";
import SideBar from "../../components/SideBar";
import "./styles.css";

const CenterPanel =()=>{return(<div className="overview-screen">
<SideBar/>
<div className="parte1">
    <AdministrativeLocomotive />
<FailureHistory/></div>
<MapCenterPanel/>
</div>)}

export default CenterPanel;