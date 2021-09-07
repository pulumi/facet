import { Disclosure, disclosureTemplate } from "@microsoft/fast-foundation";
import { disclosureStyles } from "@microsoft/fast-components";
import { css } from "@microsoft/fast-element";

export const disclosure = Disclosure.compose({
    baseName: "disclosure",
    template: disclosureTemplate as any,
    styles: (ctx, def) => css`
        ${disclosureStyles(ctx, def as any)}
    `,
});
