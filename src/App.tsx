import { useEffect } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuthContext } from "./context/AuthContext";
import { GlobalProvider } from "./context/GlobalContext";
import { getRoutes } from "./routes";

const App = () => {
  const { isLoggedIn, login } = useAuthContext();
  const routes = getRoutes(isLoggedIn);
  const router = createBrowserRouter(routes);

  useEffect(() => {
    const id = localStorage.getItem("id");
    const token = localStorage.getItem("token");
    if (id && token) {
      login({ id, token });
    }
  }, [login]);

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
