import { Button, Divider, Grid, Typography } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CircleIcon from '@mui/icons-material/Circle';
import ItemCount from "../../ItemCount/ItemCount.jsx";
import { useContext } from "react";
import { CartContext } from "../../../context/cartContext.jsx";
import FlipperImg from "../../FlipperImg/FlipperImg.jsx";

// Se crean los estilos para el componente

const centerFlexRow = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
};

const centerFlexColumn = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

const gridStyles = {
    xs: 7,
    md: 7,
    sx: centerFlexRow,
};

// Se crea el componente CartItems
const CartItems = () => {

    // Se obtienen los datos del contexto
    const { cart, removeFromCart } = useContext(CartContext);

    return (

        <>
            {/* Se renderizan los items del carrito */}
            {
                cart.map((prod) => (

                    <Grid container spacing={1}
                        key={prod.id}
                        sx={centerFlexRow}
                    >

                        <Grid item {...gridStyles}>

                            <Grid container spacing={1} >

                                <Grid item
                                    xs={2}
                                    md={2}
                                    sx={centerFlexRow}
                                >

                                    <Button
                                        onClick={() => removeFromCart(prod.id)}
                                    >

                                        <DeleteOutlineIcon fontSize="medium" />

                                    </Button>

                                </Grid>

                                <Grid
                                    item
                                    className="fullSize"
                                    xs={3}
                                    md={3}
                                    sx={centerFlexColumn}
                                >

                                    <FlipperImg item={prod} size={150} />

                                </Grid>

                                <Grid
                                    item
                                    xs={7}
                                    md={7}
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        alignItems: "start",
                                    }}
                                >

                                    <Typography
                                        className="semiBold"
                                        variant="body2"
                                        sx={{
                                            color: (theme) => theme.palette.secondary.main,
                                            fontSize: "1rem",
                                        }}
                                    >
                                        {prod.name}
                                    </Typography>

                                    <Divider
                                        orientation="horizontal"
                                        sx={{
                                            display: { xs: "none", md: "block" },
                                            width: "90%",
                                        }}
                                    />

                                    <Typography
                                        className="regular"
                                        variant="body2"
                                        sx={{
                                            color: (theme) => theme.palette.info.light,
                                            fontSize: "1rem",
                                        }}
                                    >
                                        USD {prod.price}
                                    </Typography>

                                </Grid>

                            </Grid>

                        </Grid>

                        <Grid
                            item
                            xs={5}
                            md={5}
                            sx={centerFlexRow}
                        >

                            <Grid
                                container spacing={1}
                            >

                                <Grid
                                    item
                                    xs={2}
                                    md={2}
                                    sx={centerFlexColumn}
                                >

                                    <CircleIcon
                                        fontSize="large"
                                        sx={{
                                            color: prod.color,
                                        }}
                                    />

                                </Grid>


                                <Grid
                                    item
                                    xs={6}
                                    md={6}
                                    sx={centerFlexColumn}
                                >

                                    <ItemCount prod={prod} />

                                </Grid>

                                <Grid
                                    item
                                    xs={4}
                                    md={4}
                                    sx={centerFlexColumn}
                                >

                                    <Typography
                                        className="bold"
                                        variant="body2"
                                        sx={{
                                            color: (theme) => theme.palette.info.main,
                                            fontSize: "0.95rem",
                                        }}
                                    >
                                        USD {(prod.price * prod.quantity).toFixed(2)}
                                    </Typography>

                                </Grid>

                            </Grid>

                        </Grid>

                    </Grid>

                ))

            }


        </>

    )
}

export default CartItems;