// This file is responsible for producing the token files consumed by Style Dictionary.

import { PaletteRGB } from "@microsoft/fast-components";

import {
    border,
    color,
    blackPalette,
    whitePalette,
    grayPalette,
    fuchsiaPalette,
    greenPalette,
    orangePalette,
    purplePalette,
    yellowPalette,
    salmonPalette,
    redPalette,
    violetPalette,
    bluePalette,
    elevation,
    margin,
    padding,
    screen,
    type,
} from "../design";

function getPalette(name: string, palette: PaletteRGB) {
    return {
        [name]: {
            base: {
                hex: { value: palette.source.toColorString() },
                r: { value: palette.source.r },
                g: { value: palette.source.g },
                b: { value: palette.source.b },
            },
            swatches: {
                value: palette.swatches,
            },
        },
    };
}

function getTintsAndShades(name: string, color: any) {
    return {
        [name]: Object.entries(color)
            .map(([ key, value]) => ({ [key]: { value } }))
            .reduce((result, item) => Object.assign(result, item)),
    };
}

const tokens = {
    color: {
        black: { value: color.support.black },
        white: { value: color.support.white },
        brand: {
            yellow: { value: color.brand.yellow},
            salmon: { value: color.brand.salmon},
            fuchsia:{ value: color.brand.fuchsia},
            purple: { value: color.brand.purple},
            violet: { value: color.brand.violet},
            blue: { value: color.brand.blue},
        },
        ...getTintsAndShades("red", color.red),
        ...getTintsAndShades("gray", color.gray),
        ...getTintsAndShades("yellow", color.yellow),
        ...getTintsAndShades("salmon", color.salmon),
        ...getTintsAndShades("fuchsia", color.fuchsia),
        ...getTintsAndShades("purple", color.purple),
        ...getTintsAndShades("violet", color.violet),
        ...getTintsAndShades("blue", color.blue),
        ...getTintsAndShades("green", color.green),
        ...getTintsAndShades("orange", color.orange),
        // ...getPalette("black", blackPalette),
        // ...getPalette("white", whitePalette),
        // ...getPalette("gray", grayPalette),
        // ...getPalette("fuchsia", fuchsiaPalette),
        // ...getPalette("green", greenPalette),
        // ...getPalette("orange", orangePalette),
        // ...getPalette("purple", purplePalette),
        // ...getPalette("yellow", yellowPalette),
        // ...getPalette("salmon", salmonPalette),
        // ...getPalette("red", redPalette),
        // ...getPalette("violet", violetPalette),
        // ...getPalette("blue", bluePalette),
    },

    border,
    // elevation,
    // margin,
    // padding,
    // screen,
    // type,
};

console.log(
    JSON.stringify(tokens, null, 4),
);
