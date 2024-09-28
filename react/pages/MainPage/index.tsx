import { useLayoutEffect } from "react";
import { useLoaderData } from "react-router-dom";

import { doLongTaskWithWorker } from "../../utils/do-long-task-with-worker";

import { API_URL_IMAGE_OF_THE_DAY } from "../../../shared/constants";
import { PictureOfTheDayResponse } from "../../../shared/types";
import { PictureOfTheDay } from "../../../shared/components/PictureOfTheDay";


export const pictureOfTheDayLoader = () => {
  return fetch(API_URL_IMAGE_OF_THE_DAY);
};


const MainPage = () => {
  const data = useLoaderData() as PictureOfTheDayResponse;

  useLayoutEffect(() => {
    doLongTaskWithWorker().then(res => {
      console.log('Long task done', res)
    })
  }, []);

  return (
    <PictureOfTheDay {...data} />
  );
};

export default MainPage;
