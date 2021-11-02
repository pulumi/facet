# Facet

A design system and web component library for Pulumi.

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
    import { initDesignSystem, PulumiButton } from "@pulumi/facet";

    initDesignSystem({
        mode: "light",
        theme: "web",
        components: [
            PulumiButton,
        ],
    });
    ```

5. Use the components:

    ```
    <html>
    <head>
            <meta charset="utf-8">
            <title>My Website</title>
    </head>
    <body>
            <pulumi-button>Hellos 👋</pulumi-button>
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
