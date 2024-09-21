import { BaseLayout } from "../../../components/BaseLayout";
import CardGrid from "../../../components/ImagesGrid/ImagesGrid";
import { SEARCH_API_URL } from "../../../constants";

export const planetInfoLoader = ({ params: { planet } }) => {
  return fetch(`${SEARCH_API_URL}${planet}`).then((res) => res.json());
};

async function PlanetPage({ params }: { params: { planet: string } }) {
  const data = await planetInfoLoader({ params });

  return (
    <BaseLayout>
      <CardGrid data={data?.collection} />;
    </BaseLayout>
  );
}

export default PlanetPage;
