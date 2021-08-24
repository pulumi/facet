import { DesignSystem, DesignToken } from "@microsoft/fast-foundation";
import { accentPalette, neutralPalette, PaletteRGB, provideFASTDesignSystem, SwatchRGB, bodyFont, typeRampBaseFontSize, controlCornerRadius, typeRampBaseLineHeight, baseLayerLuminance, fillColor, neutralLayer1, neutralLayerCardContainer, StandardLuminance, neutralForegroundRest, fastAccordionItem, fastButton, fastAccordion, fastDisclosure, fastCombobox, fastOption, fastCheckbox, disclosureStyles } from "@microsoft/fast-components";
import { html, css } from "@microsoft/fast-element";
import { parseColorHexRGB } from "@microsoft/fast-colors";
import { color, type, border, padding, margin } from "./design";

function genPalette(baseColorInHexRGB: string) {
    return PaletteRGB.from(SwatchRGB.from(parseColorHexRGB(baseColorInHexRGB)!))
}

const whitePalette = genPalette(color.white);
const blackPalette = genPalette(color.black);
const yellowPalette = genPalette(color.brand.yellow);
const salmonPalette = genPalette(color.brand.salmon);
const fuchsiaPalette = genPalette(color.brand.fuchsia);
const purplePalette = genPalette(color.brand.purple);
const violetPalette = genPalette(color.brand.violet);
const bluePalette = genPalette(color.brand.blue);
const redPalette = genPalette(color.red[500]);
const grayPalette = genPalette(color.gray[500]);
const orangePalette = genPalette(color.orange[500]);
const greenPalette = genPalette(color.green[500]);

export { color, type, screen } from "./design";

export { accordion, accordionItem } from "./components/accordion";
export { checkbox } from "./components/checkbox";
export { counter } from "./components/counter";
export { combobox } from "./components/combobox";
export { disclosure } from "./components/disclosure";
export { option } from "./components/option";

interface DesignSystemOptions {
    element?: HTMLElement;
    prefix?: string;
    components: any[];
}

export function initDesignSystem(options: DesignSystemOptions) {
    const prefix = options.prefix || "pulumi";

    neutralPalette.withDefault(bluePalette);
    accentPalette.withDefault(purplePalette);

    bodyFont.withDefault(type.font.default);

    typeRampBaseFontSize.withDefault(type.ramp.base.fontSize);
    typeRampBaseLineHeight.withDefault(type.ramp.base.lineHeight);

    controlCornerRadius.withDefault(border.radius);

    const headingFont = DesignToken.create<string>("heading-font");
    headingFont.withDefault(type.font.heading);

    const basePadding = DesignToken.create<string>("base-padding");
    basePadding.withDefault(padding.default);

    const baseMargin = DesignToken.create<string>("base-margin");
    baseMargin.withDefault(padding.default);

    baseLayerLuminance.withDefault(StandardLuminance.LightMode);
    fillColor.setValueFor(document.body, neutralLayer1);

    provideFASTDesignSystem(options.element)
        .withPrefix(prefix)
        .register(

            // Register all required FAST components.
            fastAccordion(),
            fastAccordionItem(),
            fastButton(),
            fastCombobox(),
            fastOption(),

            // Register client components.
            ...options.components,
        );
}
