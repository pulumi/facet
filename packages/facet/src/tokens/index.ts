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

function getColorToken(name: string, palette: PaletteRGB) {
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

const tokens = {
    color: {
        ...getColorToken("black", blackPalette),
        ...getColorToken("white", whitePalette),
        ...getColorToken("gray", grayPalette),
        ...getColorToken("fuchsia", fuchsiaPalette),
        ...getColorToken("green", greenPalette),
        ...getColorToken("orange", orangePalette),
        ...getColorToken("purple", purplePalette),
        ...getColorToken("yellow", yellowPalette),
        ...getColorToken("salmon", salmonPalette),
        ...getColorToken("red", redPalette),
        ...getColorToken("violet", violetPalette),
        ...getColorToken("blue", bluePalette),
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
