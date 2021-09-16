# Facet

Facet is web component library and UI design system for Pulumi web projects, built with [Microsoft FAST](https://www.fast.design/).

## Usage

Facet is distributed as an npm package. To use it:


3. Install package in the usual way:

    ```
    npm install @pulumi/facet
    ```

    ```
    yarn add @pulumi/facet
    ```

4. Import it into your project with the module bundler of your choice:

    ```
    import { initDesignSystem, button } from "@pulumi/facet";

    initDesignSystem({
        prefix: "pulumi",
        mode: "light",
        theme: "web",
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
    </head>
    <body>
            <pulumi-button appearance="accent">Hellos 👋</pulumi-button>
            <script src="dist/bundle.js"></script>
    </body>
    </html>
    ```

## Development

```
nvm use
make clean ensure serve
```

More docs to come...
