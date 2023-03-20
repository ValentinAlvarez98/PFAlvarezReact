import { ThemeProviderCustom } from "../../theme/Theme.jsx";
import {
    AppBar, Container, Toolbar, Box, Divider
} from "@mui/material";
import { logo } from "../../img/Img.jsx";
import { Link } from "react-router-dom";


const NavBar1 = () => {
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
                            <Link to="/">
                                <img src={logo[0].imgPath} alt={logo[0].label} />
                            </Link>
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

export default NavBar1;