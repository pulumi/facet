module.exports = function(env, { mode }) {
    return {
        mode: "development",
        devtool: "inline-source-map",
        entry: {
            app: "./src/app.ts",
            index: "./src/index.ts",
        },
        output: {
            filename: "[name].js",
        },
        resolve: {
            extensions: [".ts", ".js"],
            modules: ["src", "node_modules"]
        },
        devServer: {
            port: 9000,
            historyApiFallback: true,
            writeToDisk: true,
            open: !process.env.CI,
            lazy: false
        },
        module: {
            rules: [
                {
                    test: /\.ts$/i,
                    use: [
                        {
                            loader: "ts-loader"
                        }
                    ],
                    exclude: /node_modules/
                }
            ]
        }
    }
}
