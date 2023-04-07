import { Container, Grid, Button, Typography } from "@mui/material"
import CartNavbar from "./CartNavbar/CartNavbar.jsx"
import CartItemInfo from "./CartItemInfo/CartItemInfo.jsx"
import CartItems from "./CartItems/CartItems.jsx"
import { useContext } from "react";
import { CartContext } from "../../context/cartContext.jsx";
import CartResume from "./CartResume/CartResume.jsx";

// Se crea el componente Cart que contiene el carrito de compras
const Cart = () => {

    // Se obtienen los datos del contexto
    const { totalPrecio } = useContext(CartContext);

    return (
        <>
            {/* Se renderiza el navbar del carrito */}
            <CartNavbar />

            {/* Se crea un contenedor que ocupa todo el ancho de la pantalla */}
            <Container maxWidth="lg"
                className="fullSize"
                sx={{
                    marginTop: "4rem",
                    boxShadow: "5px 6px 10px 0px #8b9198",
                }}
            >

                {/* Se renderiza el componente CartItemInfo */}
                <CartItemInfo />

                {/* Se renderiza el componente CartItems */}
                <CartItems />



                <Grid container spacing={1}
                    sx={{
                        mt: 4,
                        mb: 17,
                    }}
                >

                    <Grid item
                        xs={12}
                        md={12}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "end",
                            mb: 4,
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                width: "14%",
                                borderRadius: "0",
                                background: (theme) => theme.palette.primary.main,
                                "&:hover": {
                                    background: (theme) => theme.palette.primary.dark,
                                },
                            }}
                        >
                            <Typography
                                className="regular"
                                sx={{
                                    color: (theme) => theme.palette.primary.contrastText,
                                    fontSize: "0.8rem",
                                }}
                            >
                                Continuar comprando
                            </Typography>
                        </Button>
                    </Grid>

                    <Grid item
                        xs={12}
                        md={12}
                    >

                        {/* Se renderiza el componente CartResume */}
                        <CartResume totalPrecio={totalPrecio()} />

                    </Grid>

                    <Grid item
                        xs={12}
                        md={12}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                width: "100%",
                                borderRadius: "0",
                                background: (theme) => theme.palette.primary.main,
                                "&:hover": {
                                    background: (theme) => theme.palette.primary.dark,
                                },
                            }}
                        >
                            <Typography
                                className="semiBold"
                                sx={{
                                    color: (theme) => theme.palette.primary.contrastText,
                                    fontSize: "0.95rem",
                                }}
                            >
                                Finalizar compra
                            </Typography>
                        </Button>

                    </Grid>

                </Grid>

            </Container>

        </>
    )
}

export default Cart;




