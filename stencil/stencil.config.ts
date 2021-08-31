import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
    namespace: "stencil",
    enableCache: false,
    devServer: {
        openBrowser: false,
    },
    buildDist: true,

    outputTargets: [
        {
            type: "dist",
            dir: "./dist-esm",
            typesDir: "./dist",
        },
        {
            type: "dist-custom-elements-bundle",
            dir: "./dist",
        },
    ],
    plugins: [
        sass(),
    ],
};
