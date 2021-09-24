import { textFieldTemplate, TextField } from "@microsoft/fast-foundation";
import { textFieldStyles } from "@microsoft/fast-components";
import { css } from "@microsoft/fast-element";

export const textField = TextField.compose({
    baseName: "text-field",
    template: textFieldTemplate as any,
    styles: (ctx, def) => css`
        ${textFieldStyles(ctx, def as any)}
    `,
});
