import { Component, Host, h } from "@stencil/core";

@Component({
    tag: "pulumi-button",
    styleUrl: "pulumi-button.scss",
    shadow: true,
})
export class PulumiButton {
    render() {
        return (
            <Host>
                <button>
                    <slot></slot>
                </button>
            </Host>
        );
    }
}
