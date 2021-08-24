import { Checkbox, checkboxTemplate, CheckboxOptions } from "@microsoft/fast-foundation";
import { checkboxStyles } from "@microsoft/fast-components";
import { css } from "@microsoft/fast-element";

export const checkbox = Checkbox.compose<CheckboxOptions>({
    baseName: "checkbox",
    template: checkboxTemplate as any,
    styles: (ctx, def) => css`
        ${checkboxStyles(ctx, def as any)}
    `,
});
