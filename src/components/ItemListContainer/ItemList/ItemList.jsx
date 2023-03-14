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
                                variant="h6"
                                component="div"
                                sx={{
                                    textAlign: "center",
                                    color: (theme) => theme.palette.primary.dark,
                                    fontWeight: "bold",
                                    fontSize: "1.5rem",
                                    margin: "1rem",
                                }}
                            >
                                {obtenerTexto()}
                            </Typography>
                        </Box>
                        <Grid container spacing={3}>
                            {items.map((producto) => <Item key={producto.id} item={producto} />)}
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
