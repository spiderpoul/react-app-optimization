import { createContext } from "react";

export const AccordionContext = createContext<{
    selectedItem: number | null,
    setSelectedItem: React.Dispatch<React.SetStateAction<number | null>>
}>({
    selectedItem: null,
    setSelectedItem: () => {}
});