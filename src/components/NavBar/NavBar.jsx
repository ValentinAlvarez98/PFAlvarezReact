import { ThemeProviderCustom } from "../../theme/Theme.jsx";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import CartWidget from "../CartWidget/CartWidget";
import Box from "@mui/material/Box";

const NavBar = () => {
  return (
    <ThemeProviderCustom>
      <AppBar
        position="sticky"
        sx={{
          background: "white",
        }}
      >
        <Container className="container" maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <CartWidget />
          </Box>
        </Container>
      </AppBar>
    </ThemeProviderCustom>
  );
};

export default NavBar;
