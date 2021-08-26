import { Tabs, Tab, TabPanel, tabsTemplate, tabTemplate, tabPanelTemplate } from "@microsoft/fast-foundation";
import { tabsStyles, tabStyles, tabPanelStyles } from "@microsoft/fast-components";
import { css } from "@microsoft/fast-element";
import { margin } from "../design/base";

export const tabs = Tabs.compose({
    baseName: "tabs",
    template: tabsTemplate as any,
    styles: (ctx, def) => css`
        ${tabsStyles(ctx, def as any)}

        .tablist {
            padding: 0;
        }

        .activeIndicator {
            border-radius: 0;
            margin-top: 0;
        }
    `,
});

export const tab = Tab.compose({
    baseName: "tab",
    template: tabTemplate as any,
    styles: (ctx, def) => css`
        ${tabStyles(ctx, def as any)}

        :host([aria-selected="true"]) {
            background: transparent;
        }
    `,
});

export const tabPanel = Tabs.compose({
    baseName: "tab-panel",
    template: tabPanelTemplate as any,
    styles: (ctx, def) => css`
        ${tabPanelStyles(ctx, def as any)}

        :host {
            margin-top: calc(${margin.default} * 1px);
            padding: 0;
        }
    `,
});
