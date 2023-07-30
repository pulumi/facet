import { initDesignSystem, PulumiButton } from "../dist";

initDesignSystem({
    prefix: "pulumi",
    theme: "web",
    components: [PulumiButton],
});

export const parameters = {
    actions: {
        argTypesRegex: "^on[A-Z].*",
    },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};
