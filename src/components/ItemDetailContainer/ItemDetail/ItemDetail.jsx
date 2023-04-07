import { useState, useContext } from "react";
import { Grid, Card, CardContent, Button, Typography, Box, Container, Breadcrumbs } from "@mui/material";
import { useNavigate, Link } from 'react-router-dom';
import { CartContext } from "../../../context/cartContext.jsx";


const ItemDetail = ({ item }) => {

    const { agregarAlCarrito, isInCart } = useContext(CartContext);

    const [stock, setStock] = useState(item.stock);

    const [show, setShow] = useState(false);

    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };

    const handleShow = () => {
        show === true ?
            setShow(false)
            : setShow(true);
    };


    const handleAgreagar = () => {
        if (isInCart(item.id)) {
            alert("Ya has agregado este producto al carrito");
        } else if (item.stock > 0) {
            const newItem = {
                ...item,
                quantity: 1,
            };
            setStock(stock - 1);
            agregarAlCarrito(newItem);
        } else {
            alert("No hay stock disponible");
        }
    };



    return (
        <Container maxWidth="xl">
            <Grid container spacing={2} sx={{
                mt: 4,
            }}>
                <Grid item xs={12} sm={12} md={7} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>

                    <img src={item.pictureUrl} alt={item.name} />

                </Grid>

                <Grid item xs={12} sm={12} md={5}>
                    <Breadcrumbs sx={{ pl: 2 }}>
                        <Link to='/'
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <Typography variant="body1"
                                className="regular"
                                sx={{
                                    fontSize: '0.9rem',
                                    color: (theme) => theme.palette.secondary.main,
                                }}
                            >
                                Inicio
                            </Typography>
                        </Link>
                        <Link to={`/${item.category}`}
                            style={{
                                textDecoration: "none",
                            }}
                        >
                            <Typography variant="body1"
                                className="regular"
                                sx={{
                                    fontSize: '0.9rem',
                                    color: (theme) => theme.palette.secondary.main,
                                }}
                            >
                                {item.category}
                            </Typography>
                        </Link>
                        <Typography variant="body2" className="regular">{item.name}</Typography>
                    </Breadcrumbs>
                    <Card sx={{ mt: 2, p: 0, borderRadius: 0, boxShadow: 0 }}>
                        <CardContent sx={{ pb: 0, mb: 0, }}>
                            <Typography variant="body2" component="div" className="semiBold" sx={{
                                fontSize: '1.7rem',
                                color: (theme) => theme.palette.primary.dark,
                            }}>
                                {item.name}
                            </Typography>
                        </CardContent>
                        <CardContent sx={{ pb: 0, mb: 2, }}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}>
                                <Typography variant="body2" component="div" className="regular" sx={{
                                    fontSize: '1.2rem',
                                    color: (theme) => theme.palette.secondary.main,
                                }}>
                                    Marca: {item.brand}
                                </Typography>
                                <Typography variant="body2" component="div" className="regular" sx={{
                                    fontSize: '1.2rem',
                                    color: (theme) => theme.palette.secondary.main,
                                }}>
                                    Stock: {stock}
                                </Typography>
                            </Box>
                        </CardContent>
                        <CardContent>
                            <Typography variant="body2" component="div" className="semiBold" sx={{
                                fontSize: '1.7rem',
                                color: (theme) => theme.palette.info.main,
                            }}>
                                USD {item.price.toFixed(2)}
                            </Typography>
                        </CardContent>
                        {
                            show === true ?
                                <CardContent sx={{ mt: 1, }}>
                                    <Typography variant="body2" component="div" className="regular" sx={{
                                        fontSize: '1.2rem',
                                        color: (theme) => theme.palette.secondary.main,
                                    }}>
                                        {item.description}
                                    </Typography>
                                </CardContent>
                                :
                                null
                        }

                        <CardContent sx={{ mt: 1, }}>
                            {
                                isInCart(item.id)
                                    ? <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}>

                                        {
                                            show === false ?
                                                <Button onClick={handleShow} className='regular' variant="contained" sx={{
                                                    backgroundColor: (theme) => theme.palette.primary.main,
                                                    color: (theme) => theme.palette.primary.contrastText,
                                                    width: '200px',
                                                    height: "30px",
                                                    borderRadius: '0.1rem',
                                                    fontWeight: 'regular',
                                                    fontSize: '0.9rem',
                                                }}>
                                                    Ver Descripción
                                                </Button>
                                                :
                                                <Button onClick={handleShow} className='regular' variant="contained" sx={{
                                                    backgroundColor: (theme) => theme.palette.primary.main,
                                                    color: (theme) => theme.palette.primary.contrastText,
                                                    width: '200px',
                                                    height: "30px",
                                                    borderRadius: '0.1rem',
                                                    fontWeight: 'regular',
                                                    fontSize: '0.9rem',
                                                }}>
                                                    Ocultar Descripción
                                                </Button>
                                        }
                                        <Button onClick={handleShow} className='regular' variant="contained" sx={{
                                            backgroundColor: (theme) => theme.palette.primary.main,
                                            color: (theme) => theme.palette.primary.contrastText,
                                            width: '200px',
                                            height: "30px",
                                            borderRadius: '0.1rem',
                                            fontWeight: 'regular',
                                            fontSize: '0.9rem',
                                        }}>
                                            <Link to='/cart' style={{ textDecoration: 'none', color: 'white' }}>
                                                Ir Al Carrito
                                            </Link>
                                        </Button>
                                    </Box>
                                    : <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}>

                                        {
                                            show === false ?
                                                <Button onClick={handleShow} className='regular' variant="contained" sx={{
                                                    backgroundColor: (theme) => theme.palette.primary.main,
                                                    color: (theme) => theme.palette.primary.contrastText,
                                                    width: '200px',
                                                    height: "30px",
                                                    borderRadius: '0.1rem',
                                                    fontWeight: 'regular',
                                                    fontSize: '0.9rem',
                                                }}>
                                                    Ver Descripción
                                                </Button>
                                                :
                                                <Button onClick={handleShow} className='regular' variant="contained" sx={{
                                                    backgroundColor: (theme) => theme.palette.primary.main,
                                                    color: (theme) => theme.palette.primary.contrastText,
                                                    width: '200px',
                                                    height: "30px",
                                                    borderRadius: '0.1rem',
                                                    fontWeight: 'regular',
                                                    fontSize: '0.9rem',
                                                }}>
                                                    Ocultar Descripción
                                                </Button>
                                        }
                                        <Button onClick={handleAgreagar} className='regular' variant="contained" sx={{
                                            backgroundColor: (theme) => theme.palette.primary.main,
                                            color: (theme) => theme.palette.primary.contrastText,
                                            width: '200px',
                                            height: "30px",
                                            borderRadius: '0.1rem',
                                            fontWeight: 'regular',
                                            fontSize: '0.9rem',
                                        }}>
                                            Agregar al carrito
                                        </Button>
                                    </Box>
                            }
                        </CardContent>
                    </Card>
                </Grid>

            </Grid >




            <Button onClick={handleVolver} className='textoButton' variant="contained" sx={{
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
                Volver
            </Button>
        </Container >
    );
};

export default ItemDetail;