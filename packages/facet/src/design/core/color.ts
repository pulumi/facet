import { PaletteRGB, SwatchRGB } from "@microsoft/fast-components";
import { parseColorHexRGB } from "@microsoft/fast-colors";

// These are the base colors from which we derive all tints and shades.
const color: any = {
    brand: {
        yellow: "#f7bf2a",
        salmon: "#f26e7e",
        fuchsia: "#bd4c85",
        purple: "#8a3391",
        violet: "#805ac3",
        blue: "#4d5bd9",
    },
    support: {
        white: "#ffffff",
        black: "#000000",
        red: "#f56565",
        gray: "#bebfc9",
        orange: "#ee975c",
        green: "#2fc89f",
    },
};

const bluePalette = genPalette(color.brand.blue);
const yellowPalette = genPalette(color.brand.yellow);
const salmonPalette = genPalette(color.brand.salmon);
const fuchsiaPalette = genPalette(color.brand.fuchsia);
const purplePalette = genPalette(color.brand.purple);
const violetPalette = genPalette(color.brand.violet);
const whitePalette = genPalette(color.support.white);
const blackPalette = genPalette(color.support.black);
const redPalette = genPalette(color.support.red);
const grayPalette = genPalette(color.support.gray);
const orangePalette = genPalette(color.support.orange);
const greenPalette = genPalette(color.support.green);

function genPalette(baseColorInHexRGB: string) {
    return PaletteRGB.from(SwatchRGB.from(parseColorHexRGB(baseColorInHexRGB)!))
}

color.red = {
    100: redPalette.swatches[10].toColorString(), // "#fff5f5",
    200: redPalette.swatches[20].toColorString(), // "#fed7d7",
    300: redPalette.swatches[30].toColorString(), // "#feb2b2",
    400: redPalette.swatches[40].toColorString(), // "#fc8181",
    500: redPalette.swatches[50].toColorString(), // "#f56565",
    600: redPalette.swatches[60].toColorString(), // "#e53e3e",
    700: redPalette.swatches[70].toColorString(), // "#c53030",
    800: redPalette.swatches[80].toColorString(), // "#9b2c2c",
    900: redPalette.swatches[90].toColorString(), // "#742a2a",
};

color.gray = {
    100: grayPalette.swatches[10].toColorString(), // "#f9f9fa",
    200: grayPalette.swatches[20].toColorString(), // "#f2f2f4",
    300: grayPalette.swatches[30].toColorString(), // "#e5e5e9",
    400: grayPalette.swatches[40].toColorString(), // "#d8d9df",
    500: grayPalette.swatches[50].toColorString(), // "#bebfc9",
    600: grayPalette.swatches[60].toColorString(), // "#8e8f97",
    700: grayPalette.swatches[70].toColorString(), // "#5f6065",
    800: grayPalette.swatches[80].toColorString(), // "#2f3032",
    900: grayPalette.swatches[90].toColorString(), // "#131314",
};

color.yellow = {
    100: yellowPalette.swatches[10].toColorString(), // "#fef9ea",
    200: yellowPalette.swatches[20].toColorString(), // "#fdf2d4",
    300: yellowPalette.swatches[30].toColorString(), // "#fce5aa",
    400: yellowPalette.swatches[40].toColorString(), // "#fad97f",
    500: yellowPalette.swatches[50].toColorString(), // "#f9cc55",
    600: yellowPalette.swatches[60].toColorString(), // color.brand.yellow,
    700: yellowPalette.swatches[70].toColorString(), // "#c69922",
    800: yellowPalette.swatches[80].toColorString(), // "#947319",
    900: yellowPalette.swatches[90].toColorString(), // "#634c11",
};

color.salmon = {
    100: salmonPalette.swatches[10].toColorString(), // "#fef1f2",
    200: salmonPalette.swatches[20].toColorString(), // "#fce2e5",
    300: salmonPalette.swatches[30].toColorString(), // "#fac5cb",
    400: salmonPalette.swatches[40].toColorString(), // "#f7a8b2",
    500: salmonPalette.swatches[50].toColorString(), // "#f58b98",
    600: salmonPalette.swatches[60].toColorString(), // color.brand.salmon,
    700: salmonPalette.swatches[70].toColorString(), // "#c25865",
    800: salmonPalette.swatches[80].toColorString(), // "#91424c",
    900: salmonPalette.swatches[90].toColorString(), // "#612c32",
};

color.fuchsia = {
    100: fuchsiaPalette.swatches[10].toColorString(), // "#f8edf3",
    200: fuchsiaPalette.swatches[20].toColorString(), // "#f2dbe7",
    300: fuchsiaPalette.swatches[30].toColorString(), // "#e5b7ce",
    400: fuchsiaPalette.swatches[40].toColorString(), // "#d794b6",
    500: fuchsiaPalette.swatches[50].toColorString(), // "#ca709d",
    600: fuchsiaPalette.swatches[60].toColorString(), // color.brand.fuchsia,
    700: fuchsiaPalette.swatches[70].toColorString(), // "#973d6a",
    800: fuchsiaPalette.swatches[80].toColorString(), // "#712e50",
    900: fuchsiaPalette.swatches[90].toColorString(), // "#4c1e35",
};

color.purple = {
    100: purplePalette.swatches[10].toColorString(), // "#f3ebf4",
    200: purplePalette.swatches[20].toColorString(), // "#e8d6e9",
    300: purplePalette.swatches[30].toColorString(), // "#d0add3",
    400: purplePalette.swatches[40].toColorString(), // "#b985bd",
    500: purplePalette.swatches[50].toColorString(), // "#a15ca7",
    600: purplePalette.swatches[60].toColorString(), // color.brand.purple,
    700: purplePalette.swatches[70].toColorString(), // "#6e2974",
    800: purplePalette.swatches[80].toColorString(), // "#531f57",
    900: purplePalette.swatches[90].toColorString(), // "#37143a",
}

color.violet = {
    100: violetPalette.swatches[10].toColorString(), // "#f2eff9",
    200: violetPalette.swatches[20].toColorString(), // "#e6def3",
    300: violetPalette.swatches[30].toColorString(), // "#ccbde7",
    400: violetPalette.swatches[40].toColorString(), // "#b39cdb",
    500: violetPalette.swatches[50].toColorString(), // "#997bcf",
    600: violetPalette.swatches[60].toColorString(), // color.brand.violet,
    700: violetPalette.swatches[70].toColorString(), // "#66489c",
    800: violetPalette.swatches[80].toColorString(), // "#4d3675",
    900: violetPalette.swatches[90].toColorString(), // "#33244e",
};

color.blue = {
    100: bluePalette.swatches[10].toColorString(), // "#edeffb",
    200: bluePalette.swatches[20].toColorString(), // "#dbdef7",
    300: bluePalette.swatches[30].toColorString(), // "#b8bdf0",
    400: bluePalette.swatches[40].toColorString(), // "#949de8",
    500: bluePalette.swatches[50].toColorString(), // "#717ce1",
    600: bluePalette.swatches[60].toColorString(), // color.brand.blue,
    700: bluePalette.swatches[70].toColorString(), // "#3e49ae",
    800: bluePalette.swatches[80].toColorString(), // "#2e3782",
    900: bluePalette.swatches[90].toColorString(), // "#1f2457",
}

color.orange = {
    100: orangePalette.swatches[10].toColorString(), // "#fff7eb",
    200: orangePalette.swatches[20].toColorString(), // "#fde6c4",
    300: orangePalette.swatches[30].toColorString(), // "#fad49e",
    400: orangePalette.swatches[40].toColorString(), // "#f6ba7e",
    500: orangePalette.swatches[50].toColorString(), // "#ee975c",
    600: orangePalette.swatches[60].toColorString(), // "#e17d47",
    700: orangePalette.swatches[70].toColorString(), // "#d86131",
    800: orangePalette.swatches[80].toColorString(), // "#ba4a2c",
    900: orangePalette.swatches[90].toColorString(), // "#993d29",
}

color.green = {
    100: greenPalette.swatches[10].toColorString(), // "#e0fff2",
    200: greenPalette.swatches[20].toColorString(), // "#b2fbe0",
    300: greenPalette.swatches[30].toColorString(), // "#81eeca",
    400: greenPalette.swatches[40].toColorString(), // "#4ce1b4",
    500: greenPalette.swatches[50].toColorString(), // "#2fc89f",
    600: greenPalette.swatches[60].toColorString(), // "#25a78b",
    700: greenPalette.swatches[70].toColorString(), // "#1d8673",
    800: greenPalette.swatches[80].toColorString(), // "#19675b",
    900: greenPalette.swatches[90].toColorString(), // "#155148",
}

export {
    color,
    whitePalette,
    blackPalette,
    yellowPalette,
    salmonPalette,
    fuchsiaPalette,
    purplePalette,
    violetPalette,
    bluePalette,
    redPalette,
    grayPalette,
    orangePalette,
    greenPalette,
};
