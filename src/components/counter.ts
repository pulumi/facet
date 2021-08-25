import { ElementDefinitionContext, FoundationElement, FoundationElementDefinition } from "@microsoft/fast-foundation";
import { html, css, attr } from "@microsoft/fast-element";
import { Button, buttonStyles } from "@microsoft/fast-components";

interface CounterDefinition extends FoundationElementDefinition {
    defaultButtonContent?: string;
}

export const counterTemplate = (context: ElementDefinitionContext, definition: CounterDefinition) => {
    const buttonTag = context.tagFor(Button);

    return html`
        <${buttonTag} appearance="${x => x.appearance}" @click=${x => x.increment()}>
            <slot>
                This button has been clicked ${x => x.count} times.
            </slot>
        </${buttonTag}>
    `;
}

export const counterStyles = (context: ElementDefinitionContext, definition: FoundationElementDefinition) => {
    const buttonTag = context.tagFor(Button);

    return css`
        ${buttonTag} {
            ${buttonStyles(context, definition as any)}
        }
    `;
}

export class Counter extends FoundationElement {

    @attr
    appearance = "";

    @attr
    count = 0;

    appearanceChanged() {
        console.log("appearanceChanged", { appearance: this.appearance });
    }

    increment() {
        this.count++;
    }
}

export const counter = Counter.compose<CounterDefinition>({
    baseName: "counter",
    template: counterTemplate as any, // https://github.com/microsoft/fast/issues/5047
    styles: (ctx, def) => css`
        ${counterStyles(ctx, def as any)}
    `,
});
