import {
    AppBar, Container, Toolbar, Divider, Grid
} from "@mui/material";
import { logo } from "../../img/Img.jsx";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';


const NavBar1 = () => {
    return (
        <>
            <AppBar
                sx={{
                    background: "white",
                    boxShadow: "none",
                    zIndex: 0,
                }}
                position="static"
            >
                <Container maxWidth="xl">
                    <Toolbar
                        className="fullSize"
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Grid container spacing={1}>
                            <Grid item xs={3} sm={3} md={3} lg={2}
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
                            </Grid>

                            <Grid item xs={2} sm={2} md={2} lg={2}>
                                <Link to="/login">
                                    <PersonIcon fontSize="large" />
                                </Link>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </Container >
            </AppBar >
            <Divider
                sx={{
                    background: (theme) => theme.palette.secondary.light,
                    color: (theme) => theme.palette.secondary.light,
                    height: "0.01rem",
                    opacity: 0.4,
                }}
            />
        </>
    );
};

export default NavBar1;