import { px2rem, responsiveFontSizes } from "../utils/getFontValues";

const FONT_PRIMARY =
  '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif';
const FONT_CODE =
  '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace';

const typography = {
  primary: FONT_PRIMARY,
  code: FONT_CODE,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 700,
  fontWeightBlack: 900,

  h1: {
    fontWeight: 700,
    lineHeight: 80 / 64,
    fontSize: px2rem(96),
    letterSpacing: px2rem(3.2),
    ...responsiveFontSizes({ sm: 48, md: 64, lg: 80 }),
  },
  h2: {
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: px2rem(80),
    ...responsiveFontSizes({ sm: 40, md: 48, lg: 64 }),
  },
  h3: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: px2rem(64),
    ...responsiveFontSizes({ sm: 32, md: 40, lg: 48 }),
  },
  h4: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: px2rem(48),
    ...responsiveFontSizes({ sm: 28, md: 32, lg: 40 }),
  },
  h5: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: px2rem(40),
    ...responsiveFontSizes({ sm: 26, md: 28, lg: 32 }),
  },
  h6: {
    fontWeight: 700,
    lineHeight: 1.2,
    fontSize: px2rem(32),
    ...responsiveFontSizes({ sm: 24, md: 26, lg: 28 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: px2rem(20),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: px2rem(18),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: px2rem(16),
  },
  body2: {
    lineHeight: 1.5,
    fontSize: px2rem(14),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: px2rem(12),
  },
  button: {
    fontWeight: 700,
    lineHeight: 14 / 14,
    fontSize: px2rem(14),
    transform: "capitalize",
  },
};

export default typography;
