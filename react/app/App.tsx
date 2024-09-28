import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MainPage, {
  pictureOfTheDayLoader,
} from "../pages/MainPage";
import PlanetPage, { planetInfoLoader } from "../pages/PlanetPage";
import { SolarSystemPage } from "../pages/SolarSystemPage";
import Nav from "../components/Nav";
import { Header } from "../../shared/components/Header";
import { BaseLayout } from "../components/BaseLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout header={<Header />} nav={<Nav />} />,
    children: [
      {
        index: true,
        loader: pictureOfTheDayLoader,
        element: <MainPage />,
      },
      {
        path: "/planets/:planet",
        element: <PlanetPage />,
        loader: planetInfoLoader,
      },
      {
        path: "solar-system",
        element: <SolarSystemPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;