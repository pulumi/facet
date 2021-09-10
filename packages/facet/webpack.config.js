module.exports = function() {
    return {
        target: "node",
        mode: "production",
        entry: {
            index: ["./src/tokens/index.ts"]
        },
        output: {
            filename: "index.js",
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
    };
};
