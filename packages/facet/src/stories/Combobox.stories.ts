import { Story, Meta } from "@storybook/html";

export default {
    title: "Components/Combobox",
    argTypes: {
        autocomplete: {
            control: {
                type: "select",
                options: [
                    "inline",
                    "list",
                    "both",
                    "none",
                ],
            }
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        position: {
            control: {
                type: "select",
                options: [
                    "above",
                    "below",
                ],
            }
        },
        placeholder: {
            control: {
                type: "text",
            },
        },
        value: {
            control: {
                type: "text",
            },
        },
    },
} as Meta;

export interface ComboboxProps {
    autocomplete: string;
    disabled: boolean;
    position: string;
    placeholder: string;
    value: string;
}

const Template: Story<ComboboxProps> = ({ autocomplete, disabled, position, placeholder, value }) => {
    return `
        <pulumi-combobox autocomplete="${autocomplete}" ${disabled && "disabled"} position="${position}" placeholder="${placeholder}" value="${value}">
            <pulumi-option>Hi</pulumi-option>
            <pulumi-option>Hey</pulumi-option>
            <pulumi-option>Hello</pulumi-option>
        </pulumi-combobox>
    `;
};

export const Combobox = Template.bind({});
