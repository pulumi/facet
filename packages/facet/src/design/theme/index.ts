import * as design from "../";

import { webTheme } from "./web";
import { consoleTheme } from "./console";

const defaultTheme = {
    controlCornerRadius: `${design.border.radius}px`,
    controlPadding: `${design.padding.default / 2}px ${design.padding.default}`,
    light: {
        fill: design.color.white,
        foreground: design.color.gray[800],
        neutralFillRest: design.color.gray[600],
        neutralForegroundRest: design.color.white,
        controlStroke: `solid ${design.stroke.width}px ${design.color.gray[200]}`,
    },
    dark: {
        fill: design.color.gray[800],
        foreground: design.color.white,
        neutralFillRest: design.color.white,
        neutralForegroundRest: design.color.gray[600],
        controlStroke: `solid ${design.stroke.width}px ${design.color.gray[200]}`,
    },
};

export const theme = {
    default: defaultTheme,
    web: { ...defaultTheme, ...webTheme },
    console: { ...defaultTheme, ...consoleTheme },
};
