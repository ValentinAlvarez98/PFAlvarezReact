import { ThemeProviderCustom } from "../../theme/Theme.jsx";
import {
  AppBar, Container, Typography, Box
} from "@mui/material";
import CartWidget from "../CartWidget/CartWidget.jsx";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { Link } from "react-router-dom";



const NavBar2 = () => {
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
                <Link
                  to="/celulares"
                  style={{
                    textDecoration: "none",
                    color: "#323232",
                  }}
                >
                  CELULARES
                </Link>
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
                <Link
                  to="/accesorios"
                  style={{
                    textDecoration: "none",
                    color: "#323232",
                  }}
                >
                  ACCESORIOS
                </Link>
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
                <Link
                  to="/ofertas"
                  style={{
                    textDecoration: "none",
                    color: "#323232",
                  }}
                >
                  OFERTAS
                </Link>
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


export default NavBar2;
