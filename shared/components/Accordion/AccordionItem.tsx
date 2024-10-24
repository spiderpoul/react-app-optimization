import cx from "classnames";
import styles from "./Accordion.module.scss";
import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import { myLayoutCalculations, myRenderCalculation } from "./heavyCalcs";
import { ChevronIcon } from "./ChevronIcon";

const AccordionItem = ({ id, isOpen, text, title, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>();

  useLayoutEffect(() => {
    performance.mark("firstRenderLayout");
    myLayoutCalculations();
    performance.measure(
      `AccordionItem "${id}" first render delay`,
      "firstRenderLayout"
    );
  }, []);

  myRenderCalculation();

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={() => onToggle(id)}>
        {title}
        <ChevronIcon className={cx(styles.arrow, isOpen && styles.arrowDown)} />
      </div>
      <div
        ref={contentRef as any}
        className={styles.contentWrapper}
        style={{ height: isOpen ? contentRef.current?.scrollHeight : 0 }}
      >
        <div className={styles.content}>{text}</div>
      </div>
    </div>
  );
};

export const AccordionItemMemo = memo(AccordionItem);
