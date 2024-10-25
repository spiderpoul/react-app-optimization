import styles from "./Header.module.scss";
import Image from "next/image";
import defaultBg from "../../img/default-bg.png";

export const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Image
        className={styles.headerImage}
        src={defaultBg}
        width={1500}
        height={500}
        quality={80}
        placeholder="blur"
        alt="nebula"
      />
    </div>
  );
};
