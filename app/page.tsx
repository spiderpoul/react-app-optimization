import { API_URL_IMAGE_OF_THE_DAY } from "../constants";
import { BaseLayout } from "../components/BaseLayout";
import { PictureOfTheDayResponse } from "../types";
import Image from "next/image";
import nebula from "../img/nebula.webp";
import styles from "./page.module.scss";

async function getData(): Promise<PictureOfTheDayResponse> {
  const res = await fetch(API_URL_IMAGE_OF_THE_DAY);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PictureOfTheDay = async () => {
  const data = await getData();

  return (
    <BaseLayout>
      <div className={styles.container}>
        <>
          <h1 className={styles.title}>
            {data.title}
          </h1>
          <Image
            className={styles.img}
            src={nebula}
            width={1176}
            height={882}
            quality={80}
            placeholder="blur"
            alt="nebula"
          />
          <div className={styles.text}>{data.explanation}</div>
        </>
      </div>
    </BaseLayout>
  );
};

export default PictureOfTheDay;
