import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BaseLayout } from "./components/BaseLayout";

// import PlanetPage, { planetInfoLoader } from "";
// import { SolarSystemPage } from "./pages/SolarSystemPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        lazy: () =>
          import("./pages/PictureOfTheDay").then((m) => ({
            Component: m.PictureOfTheDay,
            loader: m.pictureOfTheDayLoader,
          })),
      },
      {
        path: ":planet",
        lazy: () =>
          import("./pages/PlanetPage").then((m) => ({
            Component: m.PlanetPage,
            loader: m.planetInfoLoader,
          })),
      },
      {
        path: "solar-system",
        lazy: () =>
          import("./pages/SolarSystemPage").then((m) => ({
            Component: m.SolarSystemPage,
          })),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
