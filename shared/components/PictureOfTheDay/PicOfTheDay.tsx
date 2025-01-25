import { lazy, Suspense } from "react";
import { accordionData } from "../Accordion/sections";
import styles from "./PicOfTheDay.module.scss";

const AccordionLazy = lazy(() => import("../Accordion/AccordionList"))

export const PictureOfTheDay: React.FC<{
  title: string;
  explanation: string;
  hdurl: string;
}> = ({ title, explanation, hdurl }) => {
  return (
    <div className={styles.container}>
      <>
        <h1 className={styles.title}>{title}</h1>
        <img className={styles.img} src={hdurl} alt="nebula" />
        <div className={styles.text}>{explanation}</div>
      </>
      <div>
        <Suspense fallback="">
          <AccordionLazy sections={accordionData} />
        </Suspense>
      </div>
    </div>
  );
};
