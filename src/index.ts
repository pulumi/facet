import { DesignSystem, DesignToken } from "@microsoft/fast-foundation";
import { accentPalette, neutralPalette, PaletteRGB, provideFASTDesignSystem, SwatchRGB, fastButton, bodyFont, typeRampBaseFontSize, controlCornerRadius, typeRampBaseLineHeight, baseLayerLuminance, fillColor, neutralLayer1, neutralLayerCardContainer, StandardLuminance, neutralForegroundRest } from "@microsoft/fast-components";
import { parseColorHexRGB } from "@microsoft/fast-colors";
import { color, type, screen, border, padding } from "./design";
import { counter } from "./components";

function genPalette(baseColorInHexRGB: string) {
    return PaletteRGB.create(SwatchRGB.from(parseColorHexRGB(baseColorInHexRGB)!))
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

function providePulumiDesignSystem(element?: HTMLElement): DesignSystem {
    return DesignSystem.getOrCreate(element);
}

export { counter } from "./components/counter";
export { color, type, screen } from "./design";

interface DesignSystemOptions {
    element?: HTMLElement;
    prefix?: string;
    components: any[];
}

export function initDesignSystem(options: DesignSystemOptions) {
    const prefix = options.prefix || "pulumi";

    neutralPalette.withDefault(whitePalette);
    accentPalette.withDefault(purplePalette);

    bodyFont.withDefault(type.font.default);

    typeRampBaseFontSize.withDefault(type.ramp.base.fontSize);
    typeRampBaseLineHeight.withDefault(type.ramp.base.lineHeight);

    controlCornerRadius.withDefault(border.radius);

    const headingFont = DesignToken.create<string>("heading-font");
    headingFont.withDefault(type.font.heading);

    const basePadding = DesignToken.create<string>("base-padding");
    basePadding.withDefault(padding.default);

    baseLayerLuminance.withDefault(StandardLuminance.LightMode);
    fillColor.setValueFor(document.body, neutralLayer1);

    // Register all FAST components used by Pulumi UI components.
    provideFASTDesignSystem(options.element)
        .withPrefix(options.prefix || "pulumi")
        .register(
            fastButton(),
        );

    providePulumiDesignSystem(options.element)
        .withPrefix(prefix)
        .register(...options.components);
}
