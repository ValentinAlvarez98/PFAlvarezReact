import { ThemeProviderCustom } from "../../theme/Theme.jsx";
import PhoneAndroidOutlinedIcon from "@mui/icons-material/PhoneAndroidOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Menu = () => {
  return (
    <ThemeProviderCustom>
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
    </ThemeProviderCustom>
  );
};

export default Menu;
