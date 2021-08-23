import { Accordion, AccordionItem, accordionTemplate, accordionItemTemplate } from "@microsoft/fast-foundation";
import { styles } from "./styles";

export const accordion = Accordion.compose({
    baseName: "accordion",
    template: accordionTemplate as any,
    styles
});

export const accordionItem = AccordionItem.compose({
    baseName: "accordion-item",
    template: accordionItemTemplate as any,
    styles
});
