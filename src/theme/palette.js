const colors = {};

const primary = {
  main: "#FF4785",
  dark: "#d43369",
};

const secondary = {
  main: "#1EA7FD",
  dark: "#1b8bd0",
};

const tertiary = {
  main: "#DDDDDD",
  dark: "#DDDDDD",
};

const success = {
  main: "#E1FFD4",
  dark: "#9fd986",
};

const error = {
  mian: "#FEDED2",
  dark: "#df987d",
};

const contrastText = "#fff";

const COMMON = {
  common: { black: "#000", white: "#fff" },
  primary: { ...primary, contrastText },
  secondary: { ...secondary, contrastText },
  tertiary: { ...tertiary, contrastText },
  success: { ...success, contrastText },
  error: { ...error, contrastText },
};

export const lightTheme = {
  ...COMMON,
  background: "#F6F9FC",
  backgroundInverse: "#7A8997",
  text: "#222222",
};

export const darkTheme = {
  ...COMMON,
  background: "#1b1c1d",
  backgroundInverse: "#333333",
  text: "#FFFFFF",
};
