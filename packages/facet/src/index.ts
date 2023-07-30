import * as design from "./design";

interface DesignSystemOptions {
    element?: HTMLElement;
    prefix?: string;
    mode?: "light" | "dark";
    theme?: "web" | "console";
    components: CustomElementConstructor[];
}

export function initDesignSystem(options: DesignSystemOptions) {
    writeDSProps(options);
    registerComponents(options.components, options.prefix);
}

export function updateDesignSystem(options: DesignSystemOptions) {
    writeDSProps(options);
}

// Register the selected components.
function registerComponents(components: CustomElementConstructor[], prefix?: string) {
    components.forEach(c => {
        const originalTagName = (c as any).is;
        const tagName = prefix ? [prefix, originalTagName.split("-")[1]].join("-") : originalTagName;
        customElements.define(tagName, c);
    });
}

// Write design-system properties to the body element by default.
function writeDSProps(options: DesignSystemOptions) {
    const el = options.element || document.body;

    let theme: any = design.theme.default;

    if (options.theme === "web") {
        theme = design.theme.web;
    } else if (options.theme === "console") {
        theme = design.theme.console;
    }

    writeDSProp(el, "--fill", options.mode === "dark" ? theme.dark.fill : theme.light.fill);
    writeDSProp(el, "--foreground", options.mode === "dark" ? theme.dark.foreground : theme.light.foreground);
    writeDSProp(el, "--neutral-fill-rest", options.mode === "dark" ? theme.dark.neutralFillRest : theme.light.neutralFillRest);
    writeDSProp(el, "--neutral-foreground-rest", options.mode === "dark" ? theme.dark.neutralForegroundRest : theme.light.neutralForegroundRest);
    writeDSProp(el, "--control-corner-radius", theme.controlCornerRadius);
    writeDSProp(el, "--control-padding", theme.controlPadding);
    writeDSProp(el, "--control-stroke", options.mode === "dark" ? theme.dark.controlStroke : theme.light.controlStroke);

    Object.entries(design.color.brand).forEach(color => {
        writeDSProp(el, `--color-brand-${color[0]}`, color[1] as string);
    });

    Object.entries(design.color.yellow).forEach(color => {
        writeDSProp(el, `--color-yellow-${color[0]}`, color[1] as string);
    });

    Object.entries(design.color.salmon).forEach(color => {
        writeDSProp(el, `--color-salmon-${color[0]}`, color[1] as string);
    });

    Object.entries(design.color.fuchsia).forEach(color => {
        writeDSProp(el, `--color-fuchsia-${color[0]}`, color[1] as string);
    });

    Object.entries(design.color.purple).forEach(color => {
        writeDSProp(el, `--color-purple-${color[0]}`, color[1] as string);
    });

    Object.entries(design.color.violet).forEach(color => {
        writeDSProp(el, `--color-violet-${color[0]}`, color[1] as string);
    });

    Object.entries(design.color.blue).forEach(color => {
        writeDSProp(el, `--color-blue-${color[0]}`, color[1] as string);
    });

    Object.entries(design.color.green).forEach(color => {
        writeDSProp(el, `--color-green-${color[0]}`, color[1] as string);
    });

    Object.entries(design.color.orange).forEach(color => {
        writeDSProp(el, `--color-orange-${color[0]}`, color[1] as string);
    });

    Object.entries(design.color.red).forEach(color => {
        writeDSProp(el, `--color-red-${color[0]}`, color[1] as string);
    });

    Object.entries(design.color.gray).forEach(color => {
        writeDSProp(el, `--color-gray-${color[0]}`, color[1] as string);
    });

    Object.entries(design.type.font).forEach(font => {
        writeDSProp(el, `--font-${font[0]}`, font[1] as string);
    });
}

function writeDSProp(el: HTMLElement, key: string, value: string) {
    el.style.setProperty(key, value);
}

// // Export everything at the top level.
export * from "./design";
export * from "./components/index";
