import { ThemeProviderCustom } from "../../theme/Theme.jsx";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { logo } from "../../img/Img.jsx";
import CartWidget from "../CartWidget/CartWidget.jsx";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";

export const NavBar1 = () => {
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
        <Container className="container" maxWidth="xl">
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

export const NavBar2 = () => {
  return (
    <ThemeProviderCustom>
      <AppBar
        position="sticky"
        sx={{
          background: "white",
        }}
      >
        <Container className="container" maxWidth="xl">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: "0",
              margin: "0",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PhoneAndroidOutlinedIcon
                sx={{
                  color: (theme) => theme.palette.primary.dark,
                  fontSize: "1.2rem",
                  marginRight: "0.3rem",
                }}
              />
              <Typography
                variant="body2"
                className="textoSecciones"
                marginRight={"1rem"}
              >
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#323232",
                  }}
                >
                  CELULARES
                </a>
              </Typography>
              <HeadphonesOutlinedIcon
                sx={{
                  color: (theme) => theme.palette.primary.dark,
                  fontSize: "1.2rem",
                  marginRight: "0.3rem",
                }}
              />
              <Typography
                variant="body2"
                className="textoSecciones"
                marginRight={"1rem"}
              >
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#323232",
                  }}
                >
                  ACCESORIOS
                </a>
              </Typography>
              <LocalOfferOutlinedIcon
                sx={{
                  color: (theme) => theme.palette.primary.dark,
                  fontSize: "1.2rem",
                  marginRight: "0.3rem",
                }}
              />
              <Typography
                variant="body2"
                className="textoSecciones"
                marginRight={"1rem"}
              >
                <a
                  href="#"
                  style={{
                    textDecoration: "none",
                    color: "#323232",
                  }}
                >
                  OFERTAS
                </a>
              </Typography>
            </Box>
            <Box>
              <CartWidget />
            </Box>
          </Box>
        </Container>
      </AppBar>
    </ThemeProviderCustom>
  );
};

const NavBars = () => {
  return (
    <div>
      <NavBar1 />
      <NavBar2 />
    </div>
  );
};

export default NavBars;
