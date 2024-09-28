import nebula from "../../img/nebula.png";
import styles from "./PicOfTheDay.module.scss";

export const PictureOfTheDay: React.FC<{
  title: string;
  explanation: string;
}> = ({ title, explanation }) => {
  return (
    <div className={styles.container}>
      <>
        <h1 className={styles.title}>{title}</h1>
        <img className={styles.img} src={nebula} alt="nebula" />
        <div className={styles.text}>{explanation}</div>
      </>
    </div>
  );
};
