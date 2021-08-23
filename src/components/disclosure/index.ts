import { Disclosure, disclosureTemplate } from "@microsoft/fast-foundation";
// import { styles } from "./styles";

export const disclosure = Disclosure.compose({
    baseName: "disclosure",
    template: disclosureTemplate as any,
    // styles
});
