import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import filesize from "rollup-plugin-filesize";

export default [
    {
        context: "this",
        input: "dist/index",
        output: [
            {
                file: "dist/facet.js",
                format: "esm",
            },
            {
                file: "dist/facet.min.js",
                format: "esm",
                plugins: [terser()],
            },
        ],
        plugins: [
            nodeResolve(),
            filesize({
                showMinifiedSize: true,
                showBrotliSize: true,
            }),
        ],
    },
];
