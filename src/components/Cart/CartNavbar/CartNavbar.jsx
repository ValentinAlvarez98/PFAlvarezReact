import * as mui from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";

// Se declara el estilo de los botones
const buttonStyle = {
    backgroundColor: "white",
    marginTop: { xs: "0.5rem", md: "0" },
    marginLeft: { xs: "0", md: "0.5rem" },
};

// Se crea el componente CartNavbar que contiene la barra de navegación del carrito
const CartNavbar = ({ onShowUserData, onHiddenUserData, onShowPaymentData, onHiddenPaymentData }) => {
    return (

        // Se crea un contenedor que ocupa todo el ancho de la pantalla
        <mui.Container maxWidth="xxl" className="fullSize"
            sx={{
                marginTop: "2rem"
            }}
        >

            {/* Se crea un grid que contiene los botones */}
            <mui.Grid container spacing={1}>

                <mui.Grid
                    item
                    xs={12}
                    md={12}
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        paddingRight: "0.5rem",
                        margin: "0 1.5rem",
                    }}
                >

                    <mui.Button
                        sx={buttonStyle}
                        onClick={() => {
                            onHiddenUserData();
                            onHiddenPaymentData();
                        }}
                    >

                        <CircleIcon
                            sx={{
                                color: (theme) => theme.palette.primary.main,
                                fontSize: "1.55rem",
                                marginRight: "0.5rem",
                            }}
                        />

                        <mui.Typography className="regular" variant="body2"
                            sx={{
                                color: (theme) => theme.palette.secondary.light
                            }}
                        >
                            Carrito
                        </mui.Typography>

                    </mui.Button>

                    <mui.Divider
                        orientation="horizontal"
                        sx={{
                            display: { xs: "none", md: "block" },
                            width: "25vw",
                        }}
                    />

                    <mui.Button
                        sx={buttonStyle}
                        onClick={() => {
                            onShowUserData();
                            onHiddenPaymentData();
                        }}
                    >

                        <CircleIcon
                            sx={{
                                color: (theme) => theme.palette.primary.main,
                                fontSize: "1.55rem",
                                marginRight: "0.5rem",
                            }}
                        />

                        <mui.Typography className="regular" variant="body2"
                            sx={{
                                color: (theme) => theme.palette.secondary.light
                            }}
                        >
                            Mis datos
                        </mui.Typography>

                    </mui.Button>

                    <mui.Divider
                        orientation="horizontal"
                        sx={{
                            display: { xs: "none", md: "block" },
                            width: "25vw",
                        }}
                    />

                    <mui.Button
                        sx={buttonStyle}
                        onClick={() => {
                            onShowPaymentData();
                            onHiddenUserData();
                        }}
                    >

                        <CircleIcon
                            sx={{
                                color: (theme) => theme.palette.primary.main,
                                fontSize: "1.55rem",
                                marginRight: "0.5rem",
                            }}
                        />

                        <mui.Typography className="regular" variant="body2"
                            sx={{
                                color: (theme) => theme.palette.secondary.light
                            }}
                        >
                            Pago
                        </mui.Typography>

                    </mui.Button>

                </mui.Grid>

            </mui.Grid>

        </mui.Container>

    )
}

export default CartNavbar;