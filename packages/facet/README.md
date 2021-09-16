# facet

Facet is web component library and UI design system for Pulumi web projects.

Install in the usual way:

```
npm install @pulumi/facet
```

```
yarn add @pulumi/facet
```

Import the design system and components:

```
import { initDesignSystem, button } from "@pulumi/facet";

initDesignSystem({
    prefix: "pulumi",
    mode: "light"
    theme: "web",
    components: [
        button(),
    ],
});
```

Use the components in your project:

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

More to come...
