import { Card, cardTemplate } from "@microsoft/fast-foundation";
import { cardStyles } from "@microsoft/fast-components";

export const card = Card.compose({
    baseName: "card",
    template: cardTemplate as any,
    styles: cardStyles as any,
});
