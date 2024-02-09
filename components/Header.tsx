import styles from "./Header.module.scss";
import defaultBg from "../img/default-bg.jpg";


export const Header = () => {
  return (
    <div className={styles.HeaderContainer}>
      <div
       className={styles.HeaderImage}
       style={{ backgroundImage: (defaultBg as any as string) }} 
       />
    </div>
  );
};
