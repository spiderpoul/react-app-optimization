import { API_URL_IMAGE_OF_THE_DAY } from "../../shared/constants";
import { PictureOfTheDayResponse } from "../../shared/types";
import { PictureOfTheDay } from "../../shared/components/PictureOfTheDay";

async function getData(): Promise<PictureOfTheDayResponse> {
  const res = await fetch(API_URL_IMAGE_OF_THE_DAY);

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

export default MainPage;
