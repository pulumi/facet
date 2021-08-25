import { Story, Meta } from "@storybook/html";

export default {
    title: "Components/Disclosure",
    argTypes: {
        title: {
            control: "text",
        },
        appearance: {
            control: {
                type: "select",
                options: [
                    "lightweight",
                    "accent",
                ],
            },
        },
        expanded: {
            control: "boolean",
        },
    },
    args: {
        title: "More...",
    },
} as Meta;

export interface DisclosureProps {

    title: string;

    /**
     * Whether it's expanded, or whatever.
     */
    expanded: boolean;

    /**
     * What the appearance is.
     */
    appearance: "lightweight" | "accent"
}

const Template: Story<DisclosureProps> = ({ title, appearance, expanded }) => {
    let appearanceAttr, expandedAttr;

    if (appearance) {
        appearanceAttr = `appearance="${appearance}"`;
    }

    if (!!expanded) {
        appearanceAttr = `expanded`;
    }

    return `
        <pulumi-disclosure ${ appearanceAttr } ${ expandedAttr }">
            <strong slot="title">${ title }</strong>
            <p>
                Here is some stuff.
            </p>
        </pulumi-disclosure>
    `
};

export const Disclosure = Template.bind({});
