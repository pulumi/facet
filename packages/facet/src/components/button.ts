import { Button, buttonTemplate } from "@microsoft/fast-foundation";
import { buttonStyles } from "@microsoft/fast-components";
import { css } from "@microsoft/fast-element";

export const button = Button.compose({
    baseName: "button",
    template: buttonTemplate as any,
    styles: (ctx, def) => css`
        ${buttonStyles(ctx, def as any)}
    `,
});
