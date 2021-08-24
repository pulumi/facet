import { ListboxOption, listboxOptionTemplate } from "@microsoft/fast-foundation";

export const option = ListboxOption.compose({
    baseName: "option",
    template: listboxOptionTemplate as any,
});
