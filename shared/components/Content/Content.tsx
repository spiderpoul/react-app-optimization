import React, { ReactNode } from "react";
import styles from "./Content.module.scss";

export const Content: React.FC<{ children: ReactNode, nav?: ReactNode }> = ({ children, nav }) => {
  return (
    <div className={styles.contentContainer}>
      {nav}
      {children}
    </div>
  );
};
