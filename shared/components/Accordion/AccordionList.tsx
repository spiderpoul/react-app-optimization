"use client";
import { FC, useCallback, useState } from "react";
import { AccordionItem } from "./AccordionItem";
import cx from "classnames";

interface Section {
  id: number;
  title: string;
  text: string;
}

export const Accordion: FC<{ sections: Section[] }> = ({ sections }) => {
  const [openSections, setOpenSections] = useState<number[]>([]);

  return (
    <div>
      {sections.map(({ id, text, title }) => {
        const isOpen = openSections.includes(id);
        const accordionItem = (
          <AccordionItem
            key={id}
            id={id}
            isOpen={isOpen}
            text={text}
            title={title}
            onToggle={() => setOpenSections(isOpen ? [] : [id])}
          />
        );
        return isOpen ? (
          accordionItem
        ) : (
          <div className="opened">{accordionItem}</div>
        );
      })}
    </div>
  );
};
