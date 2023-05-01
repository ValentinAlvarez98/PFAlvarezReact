import { AppBar, Toolbar, IconButton, InputBase, Box, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { Search as SearchIcon, AccountCircle } from "@mui/icons-material";
import { logo } from "../../img/Img";

const NavBar1 = () => {
    return (
        <AppBar
            position="static"
            sx={{
                background: "white",
            }}
        >
            <Container className="fullSize" maxWidth="lg">
                <Toolbar
                    className="fullSize"
                    sx={{
                        marginTop: "0.5rem",
                        marginBottom: "0.5rem",
                    }}
                >
                    <Link to="/">
                        <img src={logo[0].imgPath} alt={logo[0].label} />
                    </Link>

                    <Box sx={{
                        display: {
                            md: "flex"
                        },
                        marginLeft: "7%",
                    }}>
                        <IconButton
                            size="large"
                            sx={{
                                color: "white",
                                backgroundColor: (theme) => theme.palette.primary.dark,
                                p: "5px",
                                borderStartStartRadius: "5px",
                                borderEndStartRadius: "5px",
                                borderStartEndRadius: "0px",
                                borderEndEndRadius: "0px",
                                height: "4.5vh",
                                width: "4vw"
                            }}
                        >
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            placeholder="Buscar…"
                            sx={{
                                pl: 2,
                                mr: 0,
                                width: "42.5vw",
                                backgroundColor: "whitesmoke",
                            }}
                        />

                    </Box>
                    <Box sx={{ display: { md: "flex" } }}>
                        <Link to="/login" style={{ color: "white" }}>
                            <IconButton
                                size="large"
                                color="inherit"
                                sx={{
                                    paddingLeft: "1rem",
                                    paddingRight: "1rem",
                                    marginRight: "1rem",
                                    color: "white",
                                    backgroundColor: (theme) => theme.palette.primary.dark,
                                    borderStartStartRadius: "0px",
                                    borderEndStartRadius: "0px",
                                    borderStartEndRadius: "5px",
                                    borderEndEndRadius: "5px",
                                    height: "4.5vh",
                                }}
                            >
                                <AccountCircle />
                            </IconButton>
                        </Link>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar1;