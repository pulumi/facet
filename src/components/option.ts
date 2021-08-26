import { ListboxOption, listboxOptionTemplate } from "@microsoft/fast-foundation";
import { optionStyles } from "@microsoft/fast-components";
import { css } from "@microsoft/fast-element";

export const option = ListboxOption.compose({
    baseName: "option",
    template: listboxOptionTemplate as any,
    styles: (ctx, def) => css`
        ${optionStyles(ctx, def as any)}
    `,
});
