import SideBar from "../../components/SideBar";
import "./styles.css";

const Analysis = () => {
  return (
    <div className="analysis-screen">
      <SideBar />
      <div className="analysis-content">
        <div className="export-report"></div>
        <div className="comparison-content">
          <div className="weekly-comparison"></div>
          <div className="monthly-comparison"></div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
