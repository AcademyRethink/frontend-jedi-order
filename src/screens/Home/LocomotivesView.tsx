import "./styles.css";
import useLocomotiveViewController from "./useLocomotiveViewController";

const Home = () => {
  const {
    locomotives,
    onSeeLocomotivesClick,
    onFilterLocomotivesClick,
    onSeeLocomotivesOverviewClick,
    locomotivesOverview,
  } = useLocomotiveViewController();

  return (
    <div className="screen">
      <button onClick={onSeeLocomotivesClick}>VER LOCOMOTIVAS</button>
      {locomotives &&
        locomotives!.map((locomotive, index) => {
          return <p key={index}>{locomotive.name}</p>;
        })}
      <button onClick={onFilterLocomotivesClick}>FILTRAR LOCOMOTIVAS</button>
      <button onClick={onSeeLocomotivesOverviewClick}>VER OVERVIEW</button>
      {locomotivesOverview &&
        "total = " +
          locomotivesOverview?.totalLocomotive +
          "manutencao = " +
          locomotivesOverview?.maintenance +
          "andando = " +
          locomotivesOverview?.running +
          "parada = " +
          locomotivesOverview?.stopped}
    </div>
  );
};

export default Home;
