import { initDesignSystem, counter, disclosure, accordion, accordionItem, combobox, option } from "./";
import { Counter } from "./components/counter";
import { html, css } from "@microsoft/fast-element";

const componentPrefix = "pulumi";

initDesignSystem({
    prefix: componentPrefix,
    components: [
        counter({
            template: html`
                <${componentPrefix}-button @click=${x => x.increment()}>
                    <slot>Click count: ${(x: Counter) => x.count}</slot>
                </${componentPrefix}-button>
            `,
        }),
        disclosure(),
        accordion(),
        accordionItem(),
        combobox(),
        option(),
    ],
});

document.querySelector(`${componentPrefix}-combobox`)!.addEventListener("change", (event: Event) => {
    console.log(event.target);
});
