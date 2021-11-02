---
sidebar_position: 2
---

# Adding Facet to a project

```ts
import { initDesignSystem, button } from "@pulumi/facet";

initDesignSystem({
    prefix: "pulumi",
    components: [button()],
});
```

With the design system initialized, you can start adding components to your pages:

```html
<pulumi-button onclick="alert('Hooray! 🎉');">Click me</pulumi-button>
```

And you should see your components come to life:

<pulumi-button onclick="alert('Hooray! 🎉');">Click me</pulumi-button>
