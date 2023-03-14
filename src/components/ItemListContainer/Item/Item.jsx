import { Box, Grid, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ThemeProviderCustom } from "../../../theme/Theme.jsx";

const Item = ({ item }) => {

    return (
        <ThemeProviderCustom>
            <Grid item xs={12} sm={6} md={3} key={item.id}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: '1rem',
                    }}
                    key={item.id}
                >
                    <img
                        src={item.pictureUrl}
                        alt={item.name}
                        width="300"
                        height="300"
                    />
                    <Typography
                        className='textoBody'
                        variant="body2"
                        sx={{
                            color: (theme) => theme.palette.secondary.main,
                            textAlign: 'center',
                            fontWeight: 'regular',
                            fontSize: '0.95rem',
                            marginBottom: '0.5rem',
                        }}
                    >
                        {item.name}
                    </Typography>
                    <Typography
                        className="textoPrecio"
                        variant="body2"
                        sx={{
                            color: (theme) => theme.palette.info.main,
                            textAlign: 'center',
                            fontWeight: 'regular',
                            fontSize: '1.15rem',
                            marginBottom: '1rem',
                        }}
                    >
                        USD {item.price}
                    </Typography>
                    <Link to={`/${item.category}/${item.id}`}
                        style={{
                            textDecoration: "none",
                            color: "#323232",
                        }}
                    >

                        <Button className='textoButton' variant="contained" sx={{
                            backgroundColor: (theme) => theme.palette.primary.main,
                            color: (theme) => theme.palette.primary.contrastText,
                            width: '200px',
                            height: "27px",
                            marginTop: '1rem',
                            borderRadius: '1rem',
                            fontWeight: 'regular',
                            fontSize: '0.9rem',
                            fontStyle: 'italic',
                        }}>
                            Ver detalles
                        </Button>

                    </Link>
                    <Button className='textoBody' variant="contained" sx={{
                        backgroundColor: (theme) => theme.palette.primary.main,
                        color: (theme) => theme.palette.primary.contrastText,
                        width: '200px',
                        height: "30px",
                        marginTop: '1rem',
                        borderRadius: '1rem',
                        fontWeight: 'regular',
                        fontSize: '0.9rem',
                    }}>
                        Agregar al carrito
                    </Button>
                </Box>
            </Grid >
        </ThemeProviderCustom>
    )
}

export default Item;