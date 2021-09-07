import { Combobox, ComboboxOptions, comboboxTemplate } from "@microsoft/fast-foundation";
import { comboboxStyles } from "@microsoft/fast-components";
import { css } from "@microsoft/fast-element";

export const combobox = Combobox.compose<ComboboxOptions>({
    baseName: "combobox",
    template: comboboxTemplate as any,
    styles: (ctx, def) => css`
        ${comboboxStyles(ctx, def as any)}
    `,
});
