import { Story, Meta } from "@storybook/html";

export default {
    title: "Components/Select",
} as Meta;

export interface SelectProps {}

const Template: Story<SelectProps> = () => {
    return `
        <pulumi-select>
            <pulumi-option value="option-1">Option 1</pulumi-option>
            <pulumi-option value="option-2">Option 2</pulumi-option>
            <pulumi-option value="option-3">Option 3</pulumi-option>
        </pulumi-select>
    `;
};

export const Select = Template.bind({});
