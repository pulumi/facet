import { Story, Meta } from "@storybook/html";

export default {
    title: "Components/Tree View",
} as Meta;

export interface TreeViewProps {
}

const Template: Story<TreeViewProps> = () => {
    return `
        <pulumi-tree-view>
            <pulumi-tree-item>Tree item 1
                <pulumi-tree-item>Item 1's first child</pulumi-tree-item>
                <pulumi-tree-item>Item 1's second child</pulumi-tree-item>
            </pulumi-tree-item>
            <pulumi-tree-item>Tree item 2</pulumi-tree-item>
        </pulumi-tree-view>
    `;
};

export const TreeView = Template.bind({});