import { createTheme, ThemeProvider } from "@mui/material";

const Tema = createTheme({
  palette: {
    primary: {
      main: "#007DFE",
      dark: "#004095",
    },
    secondary: {
      main: "#323232",
      light: "#8b9198",
      dark: "black",
    },
    info: {
      main: "#e33c48",
      ligth: "#fe528d",
    },
  },
  typography: {
    body1: {
      fontSize: "0.85rem",
      letterSpacing: "0.025rem",
      opacity: 0.93,
      textShadow: "0 1px 1px #00000",
    },
    body2: {
      fontSize: "0.85rem",
      letterSpacing: "0.001rem",
      opacity: 0.98,
      textShadow: "0 1px 1px #00000",
    },
  },
});

export const ThemeProviderCustom = ({ children }) => {
  return <ThemeProvider theme={Tema}>{children}</ThemeProvider>;
};

export default Tema;
