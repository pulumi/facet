import { initDesignSystem, counter, disclosure, accordion, accordionItem } from "./";

initDesignSystem({
    prefix: "pulumi",
    components: [
        counter(),
        disclosure(),
        accordion(),
        accordionItem(),
    ],
});
