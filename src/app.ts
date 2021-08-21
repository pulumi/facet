import { initDesignSystem, counter } from "./";

initDesignSystem({
    prefix: "pulumi",
    components: [
        counter(),
    ],
});
