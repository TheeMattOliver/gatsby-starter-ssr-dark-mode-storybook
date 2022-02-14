export const COLORS = {
  text: {
    light: "hsl(0deg, 0%, 10%)", // white
    dark: "hsl(0deg, 0%, 100%)", // near-black
  },
  background: {
    light: "hsl(0deg, 0%, 100%)", // white
    dark: "hsl(250deg, 70%, 7%)", // navy navy blue
  },
  primary: {
    light: "hsl(340deg, 100%, 40%)", // Pinkish-red
    dark: "hsl(50deg, 100%, 50%)", // Yellow
  },
  secondary: {
    light: "hsl(250deg, 100%, 50%)", // Purplish-blue
    dark: "hsl(190deg, 100%, 40%)", // Cyan
  },
  // Grays, scaling from least-noticeable to most-noticeable
  gray100: {
    light: "hsl(0deg, 0%, 90%)",
    dark: "hsl(0deg, 0%, 10%)",
  },
  gray300: {
    light: "hsl(0deg, 0%, 70%)",
    dark: "hsl(0deg, 0%, 30%)",
  },
  gray500: {
    light: "hsl(0deg, 0%, 50%)",
    dark: "hsl(0deg, 0%, 50%)",
  },
  gray700: {
    light: "hsl(0deg, 0%, 30%)",
    dark: "hsl(0deg, 0%, 70%)",
  },
}

export const FONT_SIZES = [
  "14px", // h6
  "16px", // h5
  "18px", // h4
  "24px", // h3
  "36px", // h2
  "48px", // h1
  "72px", // h0
  "96px", // h00
]
export const LINE_HEIGHTS = {
  condensedUltra: 1,
  condensed: 1.25,
  default: 1.5,
  relaxed: 1.75,
}

export const FONT_WEIGHTS = {
  light: 300,
  normal: 500,
  semibold: 600,
  bold: 700,
  ultrabold: 800,
}

// Mobile first
export const BREAKPOINTS = {
  xxs: 320,
  xs: 450,
  sm: 544,
  md: 768,
  lg: 1024,
  xl: 1440,
  ultraWideMin: 1918,
  ultraSuperWide: 2400,
  ridiculous: 4000,
}

// mobile first
export const QUERIES = {
  xxsAndUp: `(min-width: ${BREAKPOINTS.xxs / 16}rem})`, // (min-width: 320px)
  xsAndUp: `(min-width: ${BREAKPOINTS.xs / 16}rem})`, // (min-width: 450px)
  smAndUp: `(min-width: ${BREAKPOINTS.sm / 16}rem)`, // (min-width: 544px)
  mdAndUp: `(min-width: ${BREAKPOINTS.md / 16}rem)`, // (min-width: 768px)
  lgAndUp: `(min-width: ${BREAKPOINTS.lg / 16}rem)`, // (min-width: 1024px)
  xlAndUp: `(min-width: ${BREAKPOINTS.xl / 16}rem)`, // (min-width: 1440px)
  ultraWideAndUp: `(min-width: ${BREAKPOINTS.ultraWideMin / 16}rem)`, // (min-width: 1918px)
  xlAndLarger: `(min-width: ${(BREAKPOINTS.xl + 1) / 16}rem)`,
}

export const COLOR_MODE_KEY = "color-mode"
export const INITIAL_COLOR_MODE_CSS_PROP = "--initial-color-mode"
