const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function(env, { mode }) {
    return {
        mode: mode || "production",
        devtool: "inline-source-map",
        entry: {
            app: "./src/sample/app.ts",
        },
        output: {
            filename: "[name].js",
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/sample/index.html",
                inject: "body",
            }),
        ],
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
