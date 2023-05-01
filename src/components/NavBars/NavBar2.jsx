import {
  AppBar, Container, Typography, Box
} from "@mui/material";
import CartWidget from "../Cart/CartWidget/CartWidget.jsx";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { Link } from "react-router-dom";


{ /* Se crea el componente NavBar2, el cual se encarga de mostrar el segundo navbar de la página. */ }
const NavBar2 = () => {

  { /* Se retorna el componente NavBar2. */ }
  return (

    <AppBar
      position="sticky"
      sx={{
        background: "white",
      }}
    >
      <Container className="fullSize" maxWidth="lg">
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
              className="bold"
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
              className="bold"
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
              className="bold"
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
  );
};


export default NavBar2;
