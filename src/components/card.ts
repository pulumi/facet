import { Card, cardTemplate } from "@microsoft/fast-foundation";
import { cardStyles } from "@microsoft/fast-components";
import { css } from "@microsoft/fast-element";

export const card = Card.compose({
    baseName: "card",
    template: cardTemplate as any,
    styles: (ctx, def) => css`
        ${cardStyles(ctx, def as any)}
    `,
});
