import { Story, Meta } from "@storybook/html";
import { AccordionExpandMode } from "@microsoft/fast-foundation";

export default {
    title: "Components/Accordion",
    argTypes: {
        appearance: {
            control: {
                type: "select",
                options: [
                    "lightweight",
                    "accent",
                ],
            },
        },
        expandMode: {
            control: {
                type: "select",
                options: [
                    "single",
                    "multi",
                ],
            },
        },
    },
} as Meta;

export interface AccordionProps {
    expandMode?: AccordionExpandMode;
}

const Template: Story<AccordionProps> = ({ expandMode }) => {
    return `
        <pulumi-accordion expand-mode="${expandMode}">
            <pulumi-accordion-item>
                <span slot="heading">Panel one</span>
                Panel one content
            </pulumi-accordion-item>
            <pulumi-accordion-item>
                <span slot="heading">Panel two</span>
                Panel two content
            </pulumi-accordion-item>
            <pulumi-accordion-item>
                <span slot="heading">Panel three</span>
                Panel three content
            </pulumi-accordion-item>
        </pulumi-accordion>
    `;
};

export const Accordion = Template.bind({});
