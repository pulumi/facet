import { Accordion, AccordionItem, accordionTemplate, accordionItemTemplate, AccordionExpandMode } from "@microsoft/fast-foundation";
import { accordionStyles, accordionItemStyles } from "@microsoft/fast-components";
import { css } from "@microsoft/fast-element";

export const accordion = Accordion.compose({
    baseName: "accordion",
    template: accordionTemplate as any,
    styles: (ctx, def) => css`
        ${accordionStyles(ctx, def as any)}
    `,
});

export const accordionItem = AccordionItem.compose({
    baseName: "accordion-item",
    template: accordionItemTemplate as any,
    styles: (ctx, def) => css`
        ${accordionItemStyles(ctx, def as any)}
    `,
});
