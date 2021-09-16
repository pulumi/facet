import { Story, Meta } from "@storybook/html";

export default {
    title: "Components/Tree Nav",
    argTypes: {
        greeting: {
            control: {
                type: "text",
            },
        },
        // disabled: {
        //     control: {
        //         type: "boolean",
        //     },
        // },
        // required: {
        //     control: {
        //         type: "boolean",
        //     },
        // },
        // readOnly: {
        //     control: {
        //         type: "boolean",
        //     },
        // },
    },
} as Meta;
``
export interface TreeViewProps {
    greeting: string
}

const Template: Story<TreeViewProps> = ({ greeting }) => {
    return `
        <pulumi-tree-nav greeting=${greeting}></pulumi-tree-nav>
    `;
};

// const treeNavStory: Story<any> = (args: TreeViewProps) => ({
//     props: args,
// });

// export const treeNav = treeNavStory.bind({});
Template.args = {
    greeting: "on hi"
};

export const TreeNav = Template.bind({});