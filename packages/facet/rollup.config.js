import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";
import typescript from "rollup-plugin-typescript2";

export default [
    {
        context: "this",
        input: "src/index-rollup.ts",
        output: [
            {
                file: "dist/facet.js",
                format: "esm",
            },
            {
                file: "dist/facet.min.js",
                format: "esm",
                plugins: [
                    terser(),
                ],
            },
        ],
        plugins: [
            nodeResolve(),
            typescript({
                sourceMap: false,
                declaration: false,
                declarationMap: false,
            }),
            filesize({
                showMinifiedSize: false,
                showBrotliSize: true,
            }),
        ],
    },
];
