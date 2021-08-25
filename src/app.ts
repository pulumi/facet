import { initDesignSystem, counter, disclosure, accordion, accordionItem, card, combobox, option, button, tabs, tab, tabPanel } from "./"
import { html, css } from "@microsoft/fast-element";

const componentPrefix = "pulumi";

initDesignSystem({
    prefix: componentPrefix,
    theme: "light",
    components: [
        accordion(),
        accordionItem(),
        button(),
        card(),
        combobox(),
        counter({
            // template: html`
            //     <${componentPrefix}-button @click=${x => x.increment()}>
            //         <slot>Click count: ${(x: Counter) => x.count}</slot>
            //     </${componentPrefix}-button>
            // `,
        }),
        disclosure(),
        option(),
        tab(),
        tabPanel(),
        tabs(),
    ],
});

document.querySelector(`${componentPrefix}-combobox`)!.addEventListener("change", (event: Event) => {
    console.log(event.target);
});
