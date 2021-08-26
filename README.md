# Facet

Facet is web component library and UI design system for Pulumi web projects, built with [Microsoft FAST](https://www.fast.design/).

## Development

```
# Use the right Node.
$ nvm use

# Install and run the sample app and Storybook server.
$ make clean ensure serve
```

## Usage

```
$ echo "@pulumi:registry=https://npm.pkg.github.com" > .npmrc
$ yarn add @pulumi/facet
```

```
import { initDesignSystem, button } from "@pulumi/facet";

initDesignSystem({
    prefix: "pulumi",
    components: [
        button(),
    ],
});
```

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
