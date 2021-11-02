if (typeof window !== "undefined") {
    // ^^ because https://github.com/facebook/docusaurus/issues/4268.

    const { initDesignSystem, PulumiButton } = require("@pulumi/facet");

    initDesignSystem({
        mode: "light",
        theme: "website",
        components: [PulumiButton],
    });
}
