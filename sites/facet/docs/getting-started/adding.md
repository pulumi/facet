---
sidebar_position: 2
---

# Adding Facet to a project

```ts
import { initDesignSystem, button } from "@pulumi/facet";

initDesignSystem({
    prefix: "pulumi",
    components: [
        button();
    ],
});
```

With the design system initialized, you can start adding components to your pages:

```html
<pulumi-button>Click me!</pulumi-button>
```

Live result:

<pulumi-button>Click me!</pulumi-button>
