---
sidebar_position: 2
---

# Adding Facet to a project

```ts
import { initDesignSystem } from "@pulumi/facet";

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

<pulumi-button>Click me!</pulumi-button>
