import { API_URL_IMAGE_OF_THE_DAY } from "../../shared/constants";
import { PictureOfTheDayResponse } from "../../shared/types";
import { PictureOfTheDay } from "../../shared/components/PictureOfTheDay";
import { Suspense } from "react";
import PagePlaceholder from "../../shared/components/PagePlaceholder/PagePlaceholder";

async function getData(): Promise<PictureOfTheDayResponse> {
  const res = await fetch(API_URL_IMAGE_OF_THE_DAY, {
    next: { revalidate: 60 * 60 * 24 },
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const MainPage = async () => {
  const data = await getData();

  return <PictureOfTheDay {...data} />;
};

const MainPageWrapper = () => {
  return (
    <Suspense fallback={<PagePlaceholder />}>
      <MainPage />
    </Suspense>
  );
};

export default MainPageWrapper;
