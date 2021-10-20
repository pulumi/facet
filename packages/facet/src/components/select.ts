import { selectTemplate, Select } from "@microsoft/fast-foundation";
import { selectStyles } from "@microsoft/fast-components";
import { css } from "@microsoft/fast-element";

export const select = Select.compose({
    baseName: "select",
    template: selectTemplate as any,
    styles: (ctx, def) => css`
        ${selectStyles(ctx, def as any)}
    `,
});
