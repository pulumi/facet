import { Story, Meta } from "@storybook/html";

export default {
    title: "Components/Card",
} as Meta;

const Template: Story = () => {
    return `
        <pulumi-card style="width: 300px;">
            <img src="https://via.placeholder.com/300x200/414141" />
            <div style="padding: var(--base-padding); color: var(--neutral-foreground-rest);">
                <h2>Heading</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maurisscelerisque varius ornare.
                    Etiam convallis sollicitudin scelerisque.Maecenas in velit vehicula, aliquet orci et, consequat
                    purus. Donec egetsodales lectus, vel sollicitudin ligula. Suspendisse volutpat auctor diam,
                    vel mattis lorem venenatis in.
                </p>
                <pulumi-button>Button</pulumi-button>
            </div>
        </pulumi-card>
    `;
};

export const Card = Template.bind({});
