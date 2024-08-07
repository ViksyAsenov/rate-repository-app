import { Platform } from "react-native";

const theme = {
  colors: {
    barBackground: "#24292e",
    textPrimary: "#ffffff",
    textSecondary: "#586069",
    primary: "#0366d6",
    backgroundColor: "#cccccc",
    error: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
