import { FASTElement, customElement, attr, html } from '@microsoft/fast-element';

const template = html<TreeNav>`
  <pulumi-tree-view>
    <pulumi-tree-item>${x => x.greeting?.toUpperCase()}<pulumi-tree-item>Goodbye!</pulumi-tree-item></pulumi-tree-item>
  <pulumi-tree-view>
`;

@customElement({
    name: 'pulumi-tree-nav',
    template
})

export class TreeNav extends FASTElement {
    @attr greeting: string;
}

