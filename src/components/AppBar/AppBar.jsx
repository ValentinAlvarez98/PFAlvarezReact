import { ThemeProviderCustom } from "../../theme/Theme.jsx";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { logo } from "../../img/Img.jsx";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export const BarraApp = () => {
  return (
    <ThemeProviderCustom>
      <AppBar
        sx={{
          background: "white",
          boxShadow: "none",
          zIndex: 0,
        }}
        position="static"
      >
        <Container className="container" maxWidth="lg">
          <Toolbar
            className="toolbar"
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "start",
                marginTop: "1rem",
                marginBottom: "1rem",
              }}
            >
              <img src={logo[0].imgPath} alt={logo[0].label} />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Divider
        sx={{
          background: (theme) => theme.palette.secondary.light,
          color: (theme) => theme.palette.secondary.light,
          height: "0.01rem",
          opacity: 0.4,
        }}
      />
    </ThemeProviderCustom>
  );
};
