import { FC, useState } from "react";
import { AccordionItem } from "./AccordionItem";

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
        return (
          <AccordionItem
            key={Math.random()}
            id={id}
            isOpen={isOpen}
            text={text}
            title={title}
            onToggle={() => setOpenSections([id])}
          />
        );
      })}
    </div>
  );
};
