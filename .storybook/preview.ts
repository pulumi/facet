import { initDesignSystem, counter, accordion, accordionItem, disclosure, tab, tabs, tabPanel, combobox, button, card, checkbox, option } from "../src";
import { accordionStyles, accordionItemStyles, cardStyles, comboboxStyles, tabStyles, tabsStyles, tabPanelStyles, optionStyles, checkboxStyles } from "@microsoft/fast-components";
import { wwwTabStyles, wwwTabsStyles, wwwTabPanelStyles } from "../src/design/theme/web";
import { css } from "@microsoft/fast-element";

initDesignSystem({
    prefix: "pulumi",
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
                ${cardStyles(ctx, def)}
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
                ${tabStyles(ctx, def)}
            `,
        }),
        tabs({
            styles: (ctx: any, def: any) => css`
                ${tabsStyles(ctx, def)}
            `,
        }),
        tabPanel({
            styles: (ctx: any, def: any) => css`
                ${tabPanelStyles(ctx, def)}
            `,
        }),
    ],
});

export const parameters = {
    actions: {
        argTypesRegex: "^on[A-Z].*"
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};