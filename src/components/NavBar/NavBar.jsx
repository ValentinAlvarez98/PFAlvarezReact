import { ThemeProviderCustom } from "../../theme/Theme.jsx";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import CartWidget from "../CartWidget/CartWidget";
import Box from "@mui/material/Box";
import Menu from "../Menu/Menu.jsx";
import { Toolbar } from "@mui/material";

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
              justifyContent: "space-between",
              padding: "0",
              margin: "0",
            }}
          >
            <Menu />
            <Box>
              <CartWidget />
            </Box>
          </Box>
        </Container>
      </AppBar>
    </ThemeProviderCustom>
  );
};

export default NavBar;
