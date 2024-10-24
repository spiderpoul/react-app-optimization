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
        lazy: () =>
          import("../pages/MainPage").then((module) => ({
            Component: module.default,
            loader: module.pictureOfTheDayLoader,
          })),
      },
      {
        path: "/planets/:planet",
        lazy: () =>
          import("../pages/PlanetPage").then((module) => ({
            Component: module.default,
            loader: module.planetInfoLoader,
          })),
      },
      {
        path: "solar-system",
        lazy: () =>
          import("../pages/SolarSystemPage").then((module) => ({
            Component: module.SolarSystemPage,
          })),
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;