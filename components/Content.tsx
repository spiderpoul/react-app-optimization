import React, { ReactNode } from "react";
import styles from "./Content.module.scss";
import Nav from "./Nav";

const Content: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className={styles.ContentContainer}>
      <Nav />
      {children}
    </div>
  );
};

export default Content;
