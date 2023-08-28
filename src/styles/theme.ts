import { extendTheme } from "@chakra-ui/react";

const colors = {
  "main-color": "#330693",
  "secondary-color": "#8A53FF",
  "dark-grey": "#20292E",
  "pure-white": "#FFFFFF",
};

const fontSizes = {
  xs: "0.75rem",
  sm: "1rem",
  md: "1.125rem",
  lg: "1.25rem",
  xl: "1.5rem",
  "2xl": "2.5rem",
  "3xl": "3.125rem",
};

export const theme = extendTheme({
  colors,
  fonts: {
    body: "Poppins, sans-serif",
  },
  fontSizes: fontSizes,
  breakpoints: {
    base: "0em", //
    sm: "30em", // 480
    md: "48em", // 768
    lg: "62em", // 992
    xl: "80em", //1280
    "2xl": "96em",
  },
  styles: {
    global: {
      body: {
        fontSize: {
          base: "1rem",
        },
      },
    },
  },
});
