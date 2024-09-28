import React from "react";
import styles from "./BaseLayout.module.scss";
import { Content } from "../../../shared/components/Content";
import { Outlet } from "react-router-dom";

export const BaseLayout: React.FC<{
  children?: React.ReactNode;
  nav: React.ReactNode;
  header: React.ReactNode;
}> = ({ children, nav, header }) => {
  return (
    <div className={styles.layout}>
      {header}
      <Content nav={nav}><Outlet /></Content>
    </div>
  );
};

export default Content;
