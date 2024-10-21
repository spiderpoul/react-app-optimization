import cx from "classnames";
import styles from "./Accordion.module.scss";
import { memo, useEffect, useLayoutEffect, useRef, useState } from "react";
import { myLayoutCalculations, myRenderCalculation } from "./heavyCalcs";

export const AccordionItem = ({ id, isOpen, text, title, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>();
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    performance.mark("firstRenderLayout");
    myLayoutCalculations();
    performance.measure(
      `AccordionItem "${id}" first render delay`,
      "firstRenderLayout"
    );
  }, []);

  useEffect(() => {
    const content = contentRef.current;

    if (!content) return;

    if (isOpen) {
      setHeight(content.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, onToggle]);

  myRenderCalculation();

  return (
    <div className={styles.container}>
      <div className={styles.header} onClick={onToggle}>
        {title}
        <i
          className={cx(
            "fa-solid",
            isOpen ? "fa-chevron-up" : "fa-chevron-down"
          )}
        ></i>
      </div>
      <div
        ref={contentRef as any}
        className={styles.contentWrapper}
        style={{ height }}
      >
        <div className={styles.content}>{text}</div>
      </div>
    </div>
  );
};
