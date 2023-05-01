import { ThemeProviderCustom } from "../../theme/Theme.jsx";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";

{/* Se crea el componente Header, el cual se encarga de mostrar el header de la página. */ }
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
          className="bold"
          variant="body1"
          sx={{
            marginTop: "0.7rem",
            marginBottom: "0.5rem",
          }}
        >
          LÍDER EN VENTA DE CELULARES Y ACCESORIOS EN URUGUAY.
        </Typography>
      </AppBar>
    </header>
  );
};

export default Header;

{/* Se exporta el componente Header con el estilo personalizado. */ }
export const HeaderWithTheme = () => {
  return (
    <ThemeProviderCustom>
      <Header />
    </ThemeProviderCustom>
  );
};
