module.exports = {
    source: ["dist/tokens/json/*.json"],

    platforms: {
        esm: {
            transformGroup: "js",
            buildPath: "dist/tokens/esm/",
            files: [
                {
                    format: "javascript/es6",
                    destination: "index.js",
                },
            ],
        },
        cjs: {
            transformGroup: "js",
            buildPath: "dist/tokens/cjs/",
            files: [
                {
                    format: "javascript/module",
                    destination: "index.js",
                },
            ],
        },
        scss: {
            transformGroup: "scss",
            buildPath: "dist/tokens/scss/",
            files: [{
                format: "scss/map-deep",
                destination: "_variables.scss",
            }],
        },
        css: {
            transformGroup: "css",
            buildPath: "dist/tokens/css/",
            files: [{
                destination: `variables.css`,
                format: `css/variables`,
            }],
        },
    },
};
