import {
    DesignSystem,
    DesignToken
} from "@microsoft/fast-foundation";

import {
    accentPalette,
    neutralPalette,
    bodyFont,
    typeRampBaseFontSize,
    controlCornerRadius,
    typeRampBaseLineHeight,
    baseLayerLuminance,
    fillColor,
    neutralLayer1,
    neutralLayerCardContainer,
    StandardLuminance,
    neutralForegroundRest,
    fastAccordionItem,
    fastButton,
    fastAccordion,
    fastDisclosure,
    fastCombobox,
    fastOption,
    fastCheckbox,
    fastTab,
    fastTabPanel,
    fastTabs,
    fastCard,
} from "@microsoft/fast-components";

import {
    whitePalette,
    bluePalette,
    blackPalette,
    type,
    screen,
    border,
    padding,
    margin,
    elevation,
} from "./design";
interface DesignSystemOptions {
    element?: HTMLElement;
    prefix?: string;
    mode?: "light" | "dark";
    theme?: "web" | "console";
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

    if (options.mode === "dark") {
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

// Export everything at the top level.
export * from "./design";
export * from "./components";
