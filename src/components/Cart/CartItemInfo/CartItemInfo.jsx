import { Grid, Typography, Divider } from "@mui/material";

// Se crean los estilos para los textos de los items
const itemTextStyle = {
    fontSize: "0.7rem",
    fontWeight: "regular",
    color: (theme) => theme.palette.secondary.light,
};

// Se crea el estilo para el contenedor de los items
const centerFlexRow = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
};


// Se crea el componente CartItemInfo
const CartItemInfo = () => {

    // Se crean las constantes para los textos de los items
    const itemText = "ITEM";
    const colorText = "COLOR";
    const cantidadText = "CANTIDAD";
    const precioText = "PRECIO";

    // Se crean los estilos para los dividers
    const itemDividerStyle = {
        display: "block",
        width: "90%",
        marginTop: "0.5rem",
        marginLeft: "2rem",
        marginBottom: "1rem",
    };

    const colorDividerStyle = {
        display: "block",
        width: "95%",
        marginTop: "0.5rem",
        marginLeft: "0.4rem",
        marginBottom: "1rem",
    };

    return (


        <Grid
            container
            spacing={1}
            sx={centerFlexRow}
        >

            <Grid item
                xs={7}
                md={7}
                sx={{
                    mt: 4
                }}
            >

                <Grid container spacing={1}>

                    <Grid
                        item
                        xs={12}
                        md={12}
                        sx={centerFlexRow}
                    >

                        <Typography
                            className="regular"
                            variant="body2"
                            sx={itemTextStyle}
                        >
                            {itemText}
                        </Typography>

                    </Grid>

                    <Divider
                        orientation="horizontal"
                        sx={itemDividerStyle}
                    />

                </Grid>

            </Grid>

            <Grid item
                xs={5}
                md={5}
                sx={{
                    mt: 4
                }}
            >

                <Grid container spacing={1}>

                    <Grid
                        item
                        xs={12}
                        md={12}
                        sx={centerFlexRow}
                    >

                        <Grid container spacing={1}>

                            <Grid
                                item
                                xs={2}
                                md={2}
                                sx={centerFlexRow}
                            >

                                <Typography
                                    className="regular"
                                    variant="body2"
                                    sx={itemTextStyle}
                                >
                                    {colorText}
                                </Typography>

                            </Grid>

                            <Grid
                                item
                                xs={6}
                                md={6}
                                sx={centerFlexRow}
                            >
                                <Typography
                                    className="regular"
                                    variant="body2"
                                    sx={itemTextStyle}
                                >
                                    {cantidadText}
                                </Typography>

                            </Grid>

                            <Grid
                                item
                                xs={4}
                                md={4}
                                sx={centerFlexRow}
                            >
                                <Typography
                                    className="regular"
                                    variant="body2"
                                    sx={itemTextStyle}
                                >
                                    {precioText}
                                </Typography>

                            </Grid>

                        </Grid>

                    </Grid>

                    <Divider
                        orientation="horizontal"
                        sx={colorDividerStyle}
                    />

                </Grid>

            </Grid>

        </Grid>

    );
};

export default CartItemInfo;