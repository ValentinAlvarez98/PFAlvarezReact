import { Divider, Typography, Card, CardContent } from "@mui/material"

const cardContentStyles = {
    mt: 0,
    mb: 0,
    marginLeft: "0.5rem",
    marginRight: "0.5rem",
    pt: 1,
    pb: 1,
    display: 'flex',
    justifyContent: 'space-between'
};

// Se crea el componente CartResume
const CartResume = ({ totalPrecio }) => {

    return (

        <Card
            sx={{
                mb: 0,
                p: 0,
                borderRadius: 0,
                boxShadow: 0
            }}
        >

            <CardContent
                sx={cardContentStyles}
            >

                <Typography
                    variant="body1"
                    className="regular"
                    sx={{
                        mb: 2
                    }}
                >
                    Subtotal
                </Typography>

                <Typography
                    variant="body1"
                    className="regular"
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    USD {totalPrecio.toFixed(2)}
                </Typography>

            </CardContent>

            <CardContent
                sx={cardContentStyles}
            >

                <Typography
                    variant="body1"
                    className="regular"
                    sx={{
                        mb: 2,
                    }}
                >
                    <small>
                        (*) Envío
                    </small>
                </Typography>

                <Typography
                    variant="body1"
                    className="regular"
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}
                >
                    USD 0
                </Typography>

            </CardContent>

            <Divider
                orientation="horizontal"
                sx={{
                    display: "block",
                    width: "96%",
                    marginTop: "0.5rem",
                    marginLeft: "1.5rem",
                    marginBottom: "1rem",
                }}
            />

            <CardContent
                sx={cardContentStyles}
            >

                <Typography
                    variant="body1"
                    className="semiBold"
                    sx={{
                        mb: 2
                    }}
                >
                    TOTAL
                </Typography>

                <Typography
                    variant="body1"
                    className="bold"
                    sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontSize: "1.2rem",
                    }}
                >
                    USD {totalPrecio.toFixed(2)}
                </Typography>

            </CardContent>

            <CardContent
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 4,
                    mb: 2,
                    marginLeft: "0.5rem",
                }}
            >

                <Typography
                    variant="body1"
                    className="aclaraciones"
                >
                    (*) Si usted se encuentra en el interior, el envío tiene un costo de USD 5.
                </Typography>

            </CardContent>

        </Card>

    )

}

export default CartResume;