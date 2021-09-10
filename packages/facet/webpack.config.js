const HookShellScriptPlugin = require("hook-shell-script-webpack-plugin");

module.exports = function() {
    return {
        target: "node",
        mode: "production",
        entry: {
            index: ["./src/tokens/index.ts"]
        },
        output: {
            filename: "./tokens/index.js",
        },
        resolve: {
            extensions: [".ts", ".js"],
            modules: ["src", "node_modules"]
        },
        module: {
            rules: [
                {
                    test: /\.ts$/i,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "ts-loader",
                            options: {
                                configFile: "style.tsconfig.json",
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [
            new HookShellScriptPlugin({
                afterEmit: [
                    // Run the script that emits the tokens JSON, then process it.
                    `mkdir -p ./dist/tokens/json && node ./dist/tokens/index.js > ./dist/tokens/json/tokens.json && rm -vf ./dist/tokens/index.js && yarn run build:tokens-public`,
                ],
            }),
        ],
    };
};
