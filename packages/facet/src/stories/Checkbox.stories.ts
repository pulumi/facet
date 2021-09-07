import { Story, Meta } from "@storybook/html";

export default {
    title: "Components/Checkbox",
    argTypes: {
        checked: {
            control: {
                type: "boolean",
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        required: {
            control: {
                type: "boolean",
            },
        },
        readOnly: {
            control: {
                type: "boolean",
            },
        },
    },
} as Meta;

export interface CheckboxProps {
    checked: boolean;
    disabled: boolean;
    required: boolean;
    readOnly: boolean;
}

const Template: Story<CheckboxProps> = ({ checked, disabled, required, readOnly }) => {
    return `
        <pulumi-checkbox ${checked && "checked"} ${disabled && "disabled"} ${required && "required"} ${readOnly && "readOnly"}>
            Click me
        </pulumi-checkbox>
    `;
};

export const Checkbox = Template.bind({});
