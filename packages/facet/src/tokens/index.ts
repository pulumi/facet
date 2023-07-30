// This file is responsible for producing the token files consumed by Style Dictionary.

import { border, color, elevation, margin, padding, screen, type } from "../design";

const tokens = {
    color: {
        black: { value: color.support.black },
        white: { value: color.support.white },
        brand: {
            yellow: { value: color.brand.yellow },
            salmon: { value: color.brand.salmon },
            fuchsia: { value: color.brand.fuchsia },
            purple: { value: color.brand.purple },
            violet: { value: color.brand.violet },
            blue: { value: color.brand.blue },
        },
    },

    border,
    elevation,
    margin,
    padding,
    screen,
    type,
};

console.log(JSON.stringify(tokens, null, 4));
