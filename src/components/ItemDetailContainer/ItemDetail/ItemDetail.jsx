import { Grid, Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const ItemDetail = ({ item }) => {

    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} sm={12} md={12} key={item.id}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", margin: "1rem" }}>
                    <img src={item.pictureUrl} alt={item.name} width="200" height="200" />
                    <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: { xs: "1rem", sm: "1.5rem" }, margin: "1rem", textAlign: "center" }}>
                        {item.name}
                    </Typography>
                    <Typography variant="p" sx={{ fontWeight: "regular", fontSize: { xs: "1rem", sm: "1.05rem" }, margin: "1rem", textAlign: "center" }}>
                        {item.description}
                    </Typography>
                    <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: { xs: "1rem", sm: "1.5rem" }, margin: "1rem", textAlign: "center" }}>
                        USD {item.price}
                    </Typography>
                    <Button variant="contained" sx={{ margin: "1rem", fontSize: { xs: "0.8rem", sm: "1rem" } }}>
                        Agregar al carrito
                    </Button>

                    <Button onClick={handleVolver} variant="contained" sx={{ margin: "1rem", fontSize: { xs: "0.8rem", sm: "0.8rem" } }}>
                        Volver
                    </Button>
                </Box>
            </Grid>
        </Grid>
    )
};

export default ItemDetail;
