"use client";

import React from "react";
import StackGrid, { transitions } from "react-stack-grid";
import LibraryItem from "../LibraryItem/LibraryItem";
import styles from "./ImagesGrid.module.scss";
import CardGridPlaceholder from "../CardGridPlaceholder/CardGridPlaceholder";
import { LibraryResponse } from "../../types";

const { scaleDown } = transitions;

const PLACEHOLDER_COUNTS = 10;

export const GridLoader = () => (
  <div className={styles.imageGridContainer}>
  <div className={styles.loaderContainer}>
    {[...Array(PLACEHOLDER_COUNTS)].map((x, index) => (
      <CardGridPlaceholder key={index} />
    ))}
  </div>
  </div>
);

export const CardGrid: React.FC<{ data: LibraryResponse }> = ({ data }) => {
  const { items } = data;

  if (!items?.length) return <GridLoader />

  return (
    <div className={styles.imageGridContainer}>
        <StackGrid
          key="StackGrid"
          columnWidth={370}
          gutterWidth={24}
          appear={scaleDown.appear}
          appeared={scaleDown.appeared}
          enter={scaleDown.enter}
          entered={scaleDown.entered}
          leaved={scaleDown.leaved}
        >
          {items?.length &&
            items?.slice(0, 10).map((item) => {
              return <LibraryItem item={item} key={item.href} />;
            })}
        </StackGrid>
    </div>
  );
};

export { styles };
