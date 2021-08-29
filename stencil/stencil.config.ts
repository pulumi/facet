import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
    namespace: "stencil",
    devServer: {
        openBrowser: false,
    },
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
