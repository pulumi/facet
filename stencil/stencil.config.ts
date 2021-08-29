import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
    namespace: "components",
    enableCache: false,
    devServer: {
        openBrowser: false,
        reloadStrategy: "pageReload",
    },
    outputTargets: [
        // {
        //     type: "dist",
        //     // dir: "../dist/stencil/dist-esm",
        // },
        {
            type: "dist-custom-elements-bundle",
        },
    ],
    plugins: [
        sass(),
    ],
};
