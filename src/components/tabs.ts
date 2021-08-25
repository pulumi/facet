import { Tabs, Tab, TabPanel, tabsTemplate, tabTemplate, tabPanelTemplate } from "@microsoft/fast-foundation";
import { tabsStyles, tabStyles, tabPanelStyles } from "@microsoft/fast-components";
import { css } from "@microsoft/fast-element";

export const tabs = Tabs.compose({
    baseName: "tabs",
    template: tabsTemplate as any,
    styles: (ctx, def) => css`
        ${tabsStyles(ctx, def as any)}
    `,
});

export const tab = Tab.compose({
    baseName: "tab",
    template: tabTemplate as any,
    styles: (ctx, def) => css`
        ${tabStyles(ctx, def as any)}
    `,
});

export const tabPanel = Tabs.compose({
    baseName: "tab-panel",
    template: tabPanelTemplate as any,
    styles: (ctx, def) => css`
        ${tabPanelStyles(ctx, def as any)}
    `,
});
