import { ThemeProviderCustom } from "../../theme/Theme.jsx";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import NavBars from "../NavBars/NavBars.jsx";

const Header = () => {
  return (
    <header>
      <AppBar
        position="static"
        sx={{
          height: "2.2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          className="textoHeaderUno"
          variant="body1"
          sx={{
            marginTop: "0.7rem",
            marginBottom: "0.5rem",
          }}
        >
          LÍDER EN VENTA DE CELULARES Y ACCESORIOS EN URUGUAY.
        </Typography>
      </AppBar>
      <NavBars />
    </header>
  );
};

export default Header;

export const HeaderWithTheme = () => {
  return (
    <ThemeProviderCustom>
      <Header />
    </ThemeProviderCustom>
  );
};
