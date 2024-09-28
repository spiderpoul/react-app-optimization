import { Suspense } from "react";
import { CardGrid, GridLoader } from "../../../shared/components/ImagesGrid";
import { SEARCH_API_URL } from "../../../shared/constants";
import { Await, LoaderFunction, defer, useLoaderData } from "react-router-dom";

export const planetInfoLoader: LoaderFunction = ({ params: { planet } }) => {
  const data = fetch(`${SEARCH_API_URL}${planet}`).then((res) => res.json());
  return defer({ data });
};

function PlanetPage() {
  const { data } = useLoaderData() as any;

  return (
    <Suspense fallback={<GridLoader />}>
      <Await resolve={data}>
        {({ collection }) => <CardGrid data={collection} />}
      </Await>
    </Suspense>
  );
}

export default PlanetPage;
