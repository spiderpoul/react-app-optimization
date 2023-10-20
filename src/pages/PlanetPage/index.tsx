import CardGrid from "../../components/ImagesGrid";
import { LoaderFunction, defer, useLoaderData } from "react-router-dom";
import { SEARCH_API_URL } from "../../constants";

export const planetInfoLoader: LoaderFunction = ({ params: { planet } }) => {
  const data = fetch(`${SEARCH_API_URL}${planet}`).then((res) => res.json());
  return defer({ data });
};

function PlanetPage() {
  const { data } = useLoaderData() as any;

  return <CardGrid data={data} />;
}

export default PlanetPage;
