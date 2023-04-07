import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import Item from "../Item/Item.jsx";
import BasicTabs from "../../Tabs/Tabs.jsx";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const ItemList = ({ items }) => {
    const [paginaInicio, setPaginaInicio] = useState(false);
    const location = useLocation();
    const ruta = location.pathname;

    useEffect(() => {
        if (ruta === '/celulares' || ruta === '/accesorios' || ruta === '/ofertas') {
            setPaginaInicio(true);
        }
    }, [ruta]);

    const obtenerTexto = () => {
        switch (ruta) {
            case '/celulares':
                return 'Celulares';
            case '/accesorios':
                return 'Accesorios';
            case '/ofertas':
                return 'Ofertas';
            default:
                return 'Nuestros productos';
        }
    };

    return (
        <>
            <Container className="container" maxWidth="lg">
                {paginaInicio ? (
                    <>
                        <Box sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            margin: "1rem"
                        }}>
                            <Typography
                                variant="body2"
                                component="div"
                                className="bold"
                                sx={{
                                    textAlign: "center",
                                    color: (theme) => theme.palette.primary.dark,
                                    fontSize: "1.5rem",
                                    margin: "1rem",
                                }}
                            >
                                {obtenerTexto()}
                            </Typography>
                        </Box>
                        <Grid container spacing={3}>

                            {items.map((producto) =>
                                <Grid item xs={12} sm={6} md={3} key={producto.id} >
                                    <Item item={producto}
                                    />
                                </Grid>)}

                        </Grid>
                    </>
                ) : (
                    <BasicTabs />
                )}


            </Container>
        </>
    )
}

export default ItemList;
