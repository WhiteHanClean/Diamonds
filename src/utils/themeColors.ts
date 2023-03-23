const gray = {
  900: "#7852A9", // Main Text
  800: "#7852A9", // Paragraph
  700: "#4B566B",
  600: "#AF69EE", // Low Priority form Title/Text
  500: "#AEB4BE",
  400: "#DAE1E7", // Border
  300: "#E3E9EF",
  200: "#F3F5F9", // Line Stroke
  100: "#F6F9FC",
  white: "#FFFFFF",
};

const textColor = {
  primary: gray[900],
  secondary: gray[800],
  hint: gray[600],
  muted: gray[600],
  disabled: gray[400],
};

const bodyColor = {
  text: textColor.primary,
  default: gray[100],
  paper: gray["white"],
};

const primaryColor = {
  light: "#D7BFDC",
  main: "#7852A9",
  // dark: "#ff6636",
  dark: "#4F4CB6",
  text: "#ffffff",
  // 100: "#FCE9EC",
};

const secondaryColor = {
  light: "rgba(15, 52, 96, 0.2)",
  main: "#7852A9",
  dark: "#303A47",
  text: "#ffffff",
  900: "#041533",
  100: "#F3F6F9",
};

const warningColor = {
  main: "#FFCD4E",
  text: textColor.primary,
};
const errorColor = {
  main: "#7852A9",
  light: "#FFE1E6",
  text: textColor.primary,
};
const successColor = {
  main: "rgba(51, 208, 103, 1)",
  light: "rgba(51, 208, 103, 0.15)",
  text: textColor.primary,
};
const defaultColor = {
  light: textColor.secondary,
  main: textColor.primary,
  dark: textColor.primary,
  text: textColor.primary,
};

export const colors = {
  default: defaultColor,
  primary: primaryColor,
  secondary: secondaryColor,
  warn: warningColor,
  error: errorColor,
  success: successColor,
  text: textColor,
  body: bodyColor,
  gray,
};