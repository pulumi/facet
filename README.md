# Facet

Facet is web component library and UI design system for Pulumi web projects, built with [Microsoft FAST](https://www.fast.design/).

## Development

```
nvm use
make clean ensure serve
```

## Usage

Facet is currently distributed as a GitHub package. To install and use it:


1. Export a GitHub personal access token:

    ```
    export GITHUB_TOKEN="your-token"
    ```

2. Add an `.npmrc` file alongside your project's `package.json` file:

    ```
    echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
    @pulumi:registry=https://npm.pkg.github.com" > .npmrc
    ```

3. Add the package in the usual way:

    ```
    yarn add @pulumi/facet
    ```

4. Import it into your project with the module bundler of your choice:

    ```
    import { initDesignSystem, button } from "@pulumi/facet";

    initDesignSystem({
        prefix: "pulumi",
        components: [
            button(),
        ],
    });
    ```

4. Use the components:

    ```
    <html>
    <head>
            <meta charset="utf-8">
            <title>My Website</title>
            <style>
                :not(:defined) {
                    visibility: hidden;
                }
            </style>
    </head>
    <body>
            <pulumi-button></pulumi-button>
            <script src="dist/bundle.js"></script>
    </body>
    </html>
    ```
