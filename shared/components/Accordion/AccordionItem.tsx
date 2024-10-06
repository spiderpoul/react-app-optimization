import cx from "classnames";
import styles from "./Accordion.module.scss";
import { useEffect, useRef, useState } from "react";

export const AccordionItem = ({ id, isOpen, text, title, onToggle }) => {
  const contentRef = useRef<HTMLDivElement>();
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const content = contentRef.current;

    if (!content) return;

    if (isOpen) {
      setHeight(content.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen, onToggle]);

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
