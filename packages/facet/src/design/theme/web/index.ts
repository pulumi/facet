import * as design from "../../";

export const webTheme = {
    light: {
        fill: design.color.white,
        foreground: design.color.gray[800],
        neutralFillRest: design.color.blue[600],
        neutralForegroundRest: design.color.white,
        controlStroke: `solid ${design.stroke.width}px ${design.color.blue[200]}`,
    },
    dark: {
        fill: design.color.gray[800],
        foreground: design.color.white,
        neutralFillRest: design.color.white,
        neutralForegroundRest: design.color.blue[600],
        controlStroke: `solid ${design.stroke.width}px ${design.color.blue[200]}`,
    },
};
