import { initDesignSystem, checkbox, counter, disclosure, accordion, accordionItem, card, combobox, option, button, tabs, tab, tabPanel, treeView, treeItem, textField, select } from "@pulumi/facet";

import { type } from "@pulumi/facet/dist/design/core";

import { DesignToken } from "@microsoft/fast-foundation";

const fontFamilyDefault = DesignToken.create<string>("font-family-default");
fontFamilyDefault.withDefault(type.font.default);

const fontFamilyHeading = DesignToken.create<string>("font-family-heading");
fontFamilyHeading.withDefault(type.font.heading);

const fontFamilyMono = DesignToken.create<string>("font-family-mono");
fontFamilyMono.withDefault(type.font.mono);

initDesignSystem({
    prefix: "pulumi",
    mode: "light",
    components: [
        accordion(),
        accordionItem(),
        button(),
        card(),
        checkbox(),
        combobox(),
        counter(),
        disclosure(),
        option(),
        tab(),
        tabs(),
        tabPanel(),
        treeView(),
        treeItem(),
        textField(),
        select(),
    ],
});
