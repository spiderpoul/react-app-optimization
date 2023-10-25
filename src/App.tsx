import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BaseLayout } from "./components/BaseLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        lazy: () =>
          import("./pages/PictureOfTheDay").then((module) => ({
            Component: module.PictureOfTheDay,
            loader: module.pictureOfTheDayLoader,
          })),
      },
      {
        path: ":planet",
        lazy: () =>
          import("./pages/PlanetPage").then((module) => ({
            Component: module.PlanetPage,
            loader: module.planetInfoLoader,
          })),
      },
      {
        path: "solar-system",
        lazy: () =>
          import("./pages/SolarSystemPage").then((module) => ({
            Component: module.SolarSystemPage,
          })),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
