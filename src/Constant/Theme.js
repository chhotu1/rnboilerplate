import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const COLORS = {
    // base colors
    primary: "#23AA49",
    secondary: "#97A0A9",
    NavigationDrawerHeaderColor:"#23AA49",
    buttomTabBackgroundColor:"#1db347",
    // more colors
    dark: "#1F1918",
    black100: "#1F1918",
    black80: "#4C4746",
    black60: "#797574",
    black40: "#A5A3A3",
    black20: "#D2D1D1",
    grey: "#EAECEE",
    white: "#FFFFFF",
    green: "#26C148",
    danger: "#ff0000"
};

export const SIZES = {
    // global sizes
    base: 8,
    font: 14,
    basePadding: 16,

    // font sizes
    h1: 24,
    h2: 20,
    small: 13,
    body1: 16,
    body2: 18,
    labelXL: 64,

    // app dimensions
    width,
    height,
};

export const FONTS = {
    h1: { fontSize: SIZES.h1, lineHeight: 36, fontFamily: "Nunito-Medium" },
    h2: { fontSize: SIZES.h2, lineHeight: 30, fontFamily: "Nunito-Bold" },
    h2Medium: { fontSize: SIZES.h2, lineHeight: 30, fontFamily: "Nunito-Medium" },
    small: { fontSize: SIZES.small, lineHeight: 16, fontFamily: "Nunito-Regular" },
    smallMedium: { fontSize: SIZES.small, lineHeight: 16, fontFamily: "Nunito-Medium" },
    smallBold: { fontSize: SIZES.small, lineHeight: 16, fontFamily: "Nunito-Bold" },
    body1: { fontSize: SIZES.body1, lineHeight: 22, fontFamily: "Nunito-Regular" },
    body1Medium: { fontSize: SIZES.body1, lineHeight: 22, fontFamily: "Nunito-Medium" },
    body1Bold: { fontSize: SIZES.body1, lineHeight: 22, fontFamily: "Nunito-Bold" },

    body2: { fontSize: SIZES.body2, lineHeight: 24, fontFamily: "Nunito-Regular" },
    body2Medium: { fontSize: SIZES.body2, lineHeight: 24, fontFamily: "Nunito-Medium" },
    body2Bold: { fontSize: SIZES.body2, lineHeight: 24, fontFamily: "Nunito-Bold" },
    labelXLMedium: {
        fontSize: SIZES.labelXL,
        lineHeight: 64,
        fontFamily: "Nunito-Medium",
    },
};

export const BUTTON = {
    primary: {
        padding: SIZES.base,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.base * 10,
        height: SIZES.base * 7,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    secondary: {
        padding: SIZES.base,
        borderRadius: SIZES.base * 1.5,
        height: SIZES.base * 7,
        borderColor: COLORS.white,
        borderWidth: 2,
        borderStyle: "solid",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
};
export const BUTTONTEXT = {
    primary: {
        color: COLORS.white,
        ...FONTS.body2Bold,
    },
};

export const INPUT = {
    primary: {
        height: 54,
        alignItems: "center",
        borderWidth: 1,
        borderColor: COLORS.grey,
        borderStyle: "solid",
        borderRadius: SIZES.base * 1.5,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.base * 2,
        fontSize: SIZES.body1,
        fontFamily: "Nunito-Medium",
        color: COLORS.dark,
    },
    largeInput: {
        height: 120,
        paddingVertical: SIZES.base * 2,
        textAlignVertical: "top",
    },
};

export const HEADINGSTYLE = {
    primary: {
        ...FONTS.body1,
        fontFamily: "Nunito-Regular",
    },
    secondary: {
        ...FONTS.h3,
        fontFamily: "Nunito-Regular",
    },
};

export const COMMONSTYLE = {
    mainBody: {
        flex: 1,
        padding: 10,
        backgroundColor:COLORS.white
    },
};


const appTheme = {
    COLORS,
    SIZES,
    FONTS,
    BUTTON,
    BUTTONTEXT,
    INPUT,
    HEADINGSTYLE,
    COMMONSTYLE
};

export default appTheme;
