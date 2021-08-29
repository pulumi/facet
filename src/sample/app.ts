import { initDesignSystem, checkbox, counter, disclosure, accordion, accordionItem, card, combobox, option, button, tabs, tab, tabPanel } from ".."
import { wwwTabStyles, wwwTabsStyles, wwwTabPanelStyles, wwwCardStyles } from "../design/theme/web";
import { html, css } from "@microsoft/fast-element";
import { accordionStyles, accordionItemStyles, cardStyles, comboboxStyles, tabStyles, tabsStyles, tabPanelStyles, optionStyles, checkboxStyles } from "@microsoft/fast-components";
import { PulumiDateCountdown } from "../../dist/stencil/dist";

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
                ${wwwCardStyles(ctx, def)}
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
                ${wwwTabStyles(ctx, def)}
            `,
        }),
        tabs({
            styles: (ctx: any, def: any) => css`
                ${wwwTabsStyles(ctx, def)}
            `,
        }),
        tabPanel({
            styles: (ctx: any, def: any) => css`
                ${wwwTabPanelStyles(ctx, def)}
            `,
        }),
    ],
});

console.log(PulumiDateCountdown);
customElements.define("pulumi-date-countdown", PulumiDateCountdown);
