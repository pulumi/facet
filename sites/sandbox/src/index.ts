import { initDesignSystem, updateDesignSystem, PulumiButton } from "@pulumi/facet";

let theme = "web";
let mode = "light";

initDesignSystem({
    mode,
    theme,
    components: [PulumiButton],
});

window.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#mode-toggle").addEventListener("click", () => {
        mode = mode === "light" ? "dark" : "light";
        updateDesignSystem({ mode, theme });
    });

    document.querySelector("#theme-toggle").addEventListener("click", () => {
        theme = theme === "web" ? "console" : "web";
        updateDesignSystem({ mode, theme });
    });
});
