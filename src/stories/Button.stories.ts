import { Story, Meta } from "@storybook/html";

export default {
    title: "Components/Button",
    argTypes: {
        appearance: {
            control: {
                type: "select",
                options: [
                    "accent",
                    "lightweight",
                    "neutral",
                    "outline",
                    "stealth",
                ],
            },
        },
    },
} as Meta;

export interface ButtonProps {
    appearance: "accent" | "lightweight" | "neutral" | "outline" | "stealth";
}

const Template: Story<ButtonProps> = ({ appearance }) => {
    return `
        <pulumi-button appearance="${appearance}">
            Click me
        </pulumi-accordion>
    `;
};

export const Button = Template.bind({});
