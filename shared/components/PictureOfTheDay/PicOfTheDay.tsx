import nebula from "../../img/nebula.png";
import { Accordion } from "../Accordion/AccordionList";
import { accordionData } from "../Accordion/sections";
import styles from "./PicOfTheDay.module.scss";

export const PictureOfTheDay: React.FC<{
  title: string;
  explanation: string;
}> = ({ title, explanation }) => {
  return (
    <div className={styles.container}>
      <>
        <h1 className={styles.title}>{title}</h1>
        <img className={styles.img} src={(nebula as any).src || nebula} alt="nebula" />
        <div className={styles.text}>{explanation}</div>
      </>
      <div>
        <Accordion sections={[...accordionData, ...accordionData, ...accordionData]} />
      </div>
    </div>
  );
};
