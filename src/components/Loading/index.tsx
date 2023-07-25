import "./styles.css";

const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <div className="logo-container">
        <img src="./TecnoviaLogoBrown.svg" alt="Logo" className="logo" />
      </div>
      <div className="loading-bar-container">
        <div className="loading-bar" />
      </div>
    </div>
  );
};

export default LoadingComponent;
