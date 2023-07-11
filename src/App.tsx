import { SkeletonTheme } from "react-loading-skeleton";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { GlobalProvider } from "./context/GlobalContext";


const App = () => {
  return (
    <GlobalProvider>
      <SkeletonTheme
        baseColor="#979797"
        highlightColor="#787878"
        height={"100%"}
      >
        <RouterProvider router={router} />
      </SkeletonTheme>
    </GlobalProvider>
  );
};

export default App;
