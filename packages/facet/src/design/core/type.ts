const fallbackDefault = `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`;
const fallbackHeading = fallbackDefault;
const fallbackMono = `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`;

export const type = {
    font: {
        default: `Inter, ${fallbackDefault}`,
        heading: `Gilroy, ${fallbackHeading}`,
        mono: `"Roboto Mono", ${fallbackMono};`,
    },
    ramp: {
        minus2: {
            fontSize: "0.75rem",
            lineHeight: "1rem",
        },
        minus1: {
            fontSize: "0.875rem",
            lineHeight: "1.25rem",
        },
        base: {
            fontSize: "1rem",
            lineHeight: "1.5rem",
        },
        plus1: {
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
        },
        plus2: {
            fontSize: "1.25rem",
            lineHeight: "1.75rem",
        },
        plus3: {
            fontSize: "1.5rem",
            lineHeight: "2rem",
        },
        plus4: {
            fontSize: "1.875rem",
            lineHeight: "2.25rem",
        },
        plus5: {
            fontSize: "2.25rem",
            lineHeight: "2.5rem",
        },
        plus6: {
            fontSize: "3rem",
            lineHeight: "1",
        },
        plus7: {
            fontSize: "3.75rem",
            lineHeight: "1",
        },
        plus8: {
            fontSize: "4.5rem",
            lineHeight: "1",
        },
        plus9: {
            fontSize: "6rem",
            lineHeight: "1",
        },
        plus10: {
            fontSize: "8rem",
            lineHeight: "1",
        },
    }
};
