import { initDesignSystem, counter, accordion, accordionItem, disclosure } from "../src";

initDesignSystem({
    prefix: "pulumi",
    components: [
        accordion(),
        accordionItem(),
        counter(),
        disclosure(),
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
