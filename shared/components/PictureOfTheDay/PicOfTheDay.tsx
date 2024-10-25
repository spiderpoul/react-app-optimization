import Image from "next/image";
import styles from "./PicOfTheDay.module.scss";

import { Accordion } from "../Accordion/AccordionList";
import { accordionData } from "../Accordion/sections";
import { getPlaceholderImage } from "../../../next-js/utils/getPlaceholderImage";

export const PictureOfTheDay = async ({
  title,
  explanation,
  hdurl,
}: {
  title: string;
  explanation: string;
  hdurl: string;
}) => {
  const imageWithPlaceholder = await getPlaceholderImage(hdurl);

  return (
    <div className={styles.container}>
      <>
        <h1 className={styles.title}>{title}</h1>
        <Image
          className={styles.img}
          src={imageWithPlaceholder.src}
          blurDataURL={imageWithPlaceholder.placeholder}
          width={700}
          height={400}
          quality={80}
          placeholder="blur"
          alt="nebula"
        />
        <div className={styles.text}>{explanation}</div>
      </>
      <div>
        <Accordion sections={accordionData} />
      </div>
    </div>
  );
};
