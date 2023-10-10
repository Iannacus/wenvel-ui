import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./palette";
import typography from "./typography";

export default function TProvider({ children }) {
  const theme = {
    palette: { ...lightTheme },
    typography: { ...typography },
  };
  console.log(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
