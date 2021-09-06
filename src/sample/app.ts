import { initDesignSystem, checkbox, counter, disclosure, accordion, accordionItem, card, combobox, option, button, tabs, tab, tabPanel } from "../../src"
import { webTabsStyles, webTabStyles, webTabPanelStyles, webCardStyles } from "../design/theme/web";
import { html, css } from "@microsoft/fast-element";
import { accordionStyles, accordionItemStyles, cardStyles, comboboxStyles, tabStyles, tabsStyles, tabPanelStyles, optionStyles, checkboxStyles } from "@microsoft/fast-components";

import { type } from "../design";

import { DesignToken } from "@microsoft/fast-foundation";

const fontFamilyDefault = DesignToken.create<string>("font-family-default");
fontFamilyDefault.withDefault(type.font.default);

const fontFamilyHeading = DesignToken.create<string>("font-family-heading");
fontFamilyHeading.withDefault(type.font.heading);

const fontFamilyMono = DesignToken.create<string>("font-family-mono");
fontFamilyMono.withDefault(type.font.mono);

initDesignSystem({
    theme: "light",
    components: [
        accordion({
            styles: (ctx: any, def: any) => css`
                ${accordionStyles(ctx, def)}
            `,
        }),
        accordionItem({
            styles: (ctx: any, def: any) => css`
                ${accordionItemStyles(ctx, def)}
            `,
        }),
        button(),
        card({
            styles: (ctx: any, def: any) => css`
                ${webCardStyles(ctx, def)}
            `,
        }),
        checkbox({
            styles: (ctx: any, def: any) => css`
                ${checkboxStyles(ctx, def)}
            `,
        }),
        combobox({
            styles: (ctx: any, def: any) => css`
                ${comboboxStyles(ctx, def)}
            `,
        }),
        counter(),
        disclosure(),
        option({
            styles: (ctx: any, def: any) => css`
                ${optionStyles(ctx, def)}
            `,
        }),
        tab({
            styles: (ctx: any, def: any) => css`
                ${webTabStyles(ctx, def)}
            `,
        }),
        tabs({
            // styles: (ctx: any, def: any) => css`
            //     ${webTabsStyles(ctx, def)}
            // `,
        }),
        tabPanel({
            styles: (ctx: any, def: any) => css`
                ${webTabPanelStyles(ctx, def)}
            `,
        }),
    ],
});
