import { DesignSystem, DesignToken } from "@microsoft/fast-foundation";
import { accentPalette, neutralPalette, PaletteRGB, provideFASTDesignSystem, SwatchRGB, bodyFont, typeRampBaseFontSize, controlCornerRadius, typeRampBaseLineHeight, baseLayerLuminance, fillColor, neutralLayer1, neutralLayerCardContainer, StandardLuminance, neutralForegroundRest, fastAccordionItem, fastButton, fastAccordion, fastDisclosure, fastCombobox, fastOption, fastCheckbox, fastTab, fastTabPanel, fastTabs, fastCard } from "@microsoft/fast-components";
import { html, css, Constructable } from "@microsoft/fast-element";
import { parseColorHexRGB } from "@microsoft/fast-colors";
import { color, type, border, padding, margin, elevation } from "./design";

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

export { accordion, accordionItem, card, checkbox, counter, combobox, disclosure, option, tabs, tab, tabPanel, button } from "./components";
interface DesignSystemOptions {
    element?: HTMLElement;
    prefix?: string;
    theme?: "light" | "dark";
    components: any[];
}

export function initDesignSystem(options: DesignSystemOptions) {
    bodyFont.withDefault(type.font.default);

    typeRampBaseFontSize.withDefault(type.ramp.base.fontSize);
    typeRampBaseLineHeight.withDefault(type.ramp.base.lineHeight);

    controlCornerRadius.withDefault(border.radius);

    const headingFont = DesignToken.create<string>("heading-font");
    headingFont.withDefault(type.font.heading);

    const basePadding = DesignToken.create<string>("base-padding");
    basePadding.withDefault(padding.default);

    const baseMargin = DesignToken.create<string>("base-margin");
    baseMargin.withDefault(margin.default);

    if (options.theme === "dark") {
        neutralPalette.withDefault(blackPalette);
        accentPalette.withDefault(whitePalette);

        baseLayerLuminance.withDefault(StandardLuminance.DarkMode);
        fillColor.setValueFor(document.body, neutralLayer1);
    } else {
        neutralPalette.withDefault(whitePalette);
        accentPalette.withDefault(bluePalette);

        baseLayerLuminance.withDefault(StandardLuminance.LightMode);
        fillColor.setValueFor(document.body, neutralLayer1);
    }

    DesignSystem.getOrCreate(options.element)
        .withPrefix("pulumi")
        .register(

            // Register the FAST components that we use in our custom components.
            // We should only need to register those components that we reference
            // as custom elements in our own components.
            fastButton(),

            // Register client components.
            ...options.components,
        );
}
