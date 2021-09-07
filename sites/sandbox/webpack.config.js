const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = function(env, { mode }) {
    return {
        mode: mode || "production",
        devtool: "inline-source-map",
        entry: {
            app: "./src/index.ts",
        },
        output: {
            filename: "[name].js",
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./src/index.html",
                inject: "body",
            }),
        ],
        resolve: {
            extensions: [".ts", ".js"],
            modules: ["src", "node_modules"]
        },
        devServer: {
            port: 9000,
            writeToDisk: true,
            open: true,
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
