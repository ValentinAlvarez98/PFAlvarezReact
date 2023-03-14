import { Box, Grid, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Item = ({ item }) => {

    return (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "1rem" }}>
                <img src={item.pictureUrl} alt={item.name} width="200" height="200" />
                <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: { xs: "1rem", sm: "1rem" }, margin: "1rem", textAlign: "center" }}>
                    {item.name}
                </Typography>
                <Typography variant="p" sx={{ fontWeight: "bold", fontSize: { xs: "1rem", sm: "1.4rem" }, margin: "1rem", textAlign: "center" }}>
                    USD {item.price}
                </Typography>
                <Link to={`/${item.category}/${item.id}`}
                    style={{
                        textDecoration: "none",
                        color: "#323232",
                    }}
                >
                    <Button variant="contained" sx={{ margin: "1rem", fontSize: { xs: "0.8rem", sm: "0.8rem" } }}>
                        Ver Más
                    </Button>
                </Link>
                <Button variant="contained" sx={{ margin: "1rem", fontSize: { xs: "0.8rem", sm: "0.9rem" } }}>
                    Agregar al carrito
                </Button>
            </Box>
        </Grid>
    )
}

export default Item;