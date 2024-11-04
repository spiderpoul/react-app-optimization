import { CardGrid } from "../../../../shared/components/ImagesGrid/ImagesGrid";
import { SEARCH_API_URL } from "../../../../shared/constants";

const planetInfoLoader = ({ params: { planet } }) => {
  return fetch(`${SEARCH_API_URL}${planet}`, {
    cache: "no-store",
  }).then((res) => res.json());
};

async function PlanetPage({ params }: { params: { planet: string } }) {
  await new Promise((r) => setTimeout(r, 3000));
  const data = await planetInfoLoader({ params });

  return <CardGrid data={data?.collection} />;
}

export default PlanetPage;
