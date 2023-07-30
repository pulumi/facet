import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
    namespace: "pulumi",
    buildDist: true,
    sourceMap: true,
    outputTargets: [
        {
            type: "dist-custom-elements-bundle",
            dir: "./dist",
            empty: false,
        },
    ],
    plugins: [sass()],
};
