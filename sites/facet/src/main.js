if (typeof window !== "undefined") {
    // ^^ because https://github.com/facebook/docusaurus/issues/4268.

    const { initDesignSystem, button } = require("@pulumi/facet");

    initDesignSystem({
        prefix: "pulumi",
        components: [
            button(),
        ],
    });
}
