import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { BaseLayout } from "./components/BaseLayout";
import PictureOfTheDay, {
  pictureOfTheDayLoader,
} from "./pages/PictureOfTheDay";
import PlanetPage, { planetInfoLoader } from "./pages/PlanetPage";
import { SolarSystemPage } from "./pages/SolarSystemPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        index: true,
        loader: pictureOfTheDayLoader,
        element: <PictureOfTheDay />,
      },
      {
        path: ":planet",
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
