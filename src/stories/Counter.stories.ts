import { Story, Meta } from "@storybook/html";

export default {
    title: "Components/Counter",
    argTypes: {
        appearance: {
            control: {
                type: "select",
                options: [
                    "lightweight",
                    "accent",
                    "neutral",
                    "outline",
                    "stealth",
                ],
            },
        },
    },
} as Meta;

export interface CounterProps {

    /**
     * What the appearance is.
     */
    appearance: "accent" | "lightweight" | "neutral" | "outline" | "stealth";
}

const Template: Story<CounterProps> = ({ appearance }) => {
    return `
        <pulumi-counter appearance="${ appearance }"></pulumi-counter>
    `;
};

export const Counter = Template.bind({});
