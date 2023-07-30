import { Story, Meta } from "@storybook/html";

export default {
    title: "Components/Button",
    argTypes: {
        appearance: {
            control: {
                type: "select",
                options: ["accent", "lightweight", "neutral", "outline", "stealth"],
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
    },
} as Meta;

export interface ButtonProps {
    appearance: "accent" | "lightweight" | "neutral" | "outline" | "stealth";
    disabled: boolean;
}

const Template: Story<ButtonProps> = ({ appearance, disabled }) => {
    return `
        <pulumi-button appearance="${appearance}" ${disabled && "disabled"}>
            Click me
        </pulumi-accordion>
    `;
};

export const Button = Template.bind({});
