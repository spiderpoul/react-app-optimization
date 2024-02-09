import React from "react";
import styles from "./BaseLayout.module.scss";
import Content from "./Content";
import { Header } from "./Header";

export const BaseLayout: React.FC<{children: React.ReactNode}> = ({children}) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Content>
        {children}
      </Content>
    </div>
  );
};


export default Content;
