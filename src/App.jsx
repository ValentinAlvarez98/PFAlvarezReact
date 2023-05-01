import { ThemeProviderCustom } from "./theme/Theme.jsx";
import NavBar1 from "./components/NavBars/NavBar1.jsx";
import NavBar2 from "./components/NavBars/NavBar2.jsx";
import { HeaderWithTheme } from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./context/cartContext.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Divider } from "@mui/material";
import LoginProvider from "./context/loginContext.jsx";
import AppRoutes from "./routes/Routes.jsx";

function App() {
  return (
    <ThemeProviderCustom>
      <LoginProvider>
        <CartContextProvider>
          <BrowserRouter>
            <HeaderWithTheme />
            <NavBar1 />
            <NavBar2 />
            <AppRoutes />
            <Divider sx={{ mt: 5 }} />
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </LoginProvider>
    </ThemeProviderCustom>
  );
}

export default App;