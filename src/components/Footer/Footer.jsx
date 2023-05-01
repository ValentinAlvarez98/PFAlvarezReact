import { Container, Box, Card, CardMedia, Button, Grid, Typography } from '@mui/material';
import { logo, socialMedia, payments } from "../../img/Img.jsx";
import { Link } from "react-router-dom";
import SVG from './SVG.jsx';

{/* Se crea el componente Footer, el cual se encarga de mostrar el footer de la página. */ }
const Footer = () => {

    {/* Se retorna el componente Footer. */ }
    return (
        <>
            <SVG viewBox="0 0 1440 320" />
            <Container maxWidth="xxl">
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Link to="/">
                        <img src={logo[0].imgPath} alt={logo[0].label} />
                    </Link>
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 4,
                }}>
                    {socialMedia.map((image, index) => {
                        return (
                            <Card key={index} sx={{ margin: '0 0.5rem', borderRadius: '50%' }}>
                                <CardMedia component="img" image={image.imgPath} alt={image.label} sx={{ width: "30px", height: "30px" }} />
                            </Card>
                        );
                    })}
                </Box>


                <Grid container spacing={1}
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mt: 4,
                    }}
                >
                    <Grid item xs={12} sm={6} md={3}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'end',
                        }}
                    >
                        <Button>
                            <Typography variant="body2" className='semiBold' sx={{
                                color: (theme) => theme.palette.primary.dark,
                                fontSize: '0.9rem',
                            }}>
                                Nosotros
                            </Typography>

                        </Button>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'end',
                        }}
                    >
                        <Button>
                            <Typography variant="body2" className='semiBold' sx={{
                                color: (theme) => theme.palette.primary.dark,
                                fontSize: '0.9rem',
                            }}>
                                Cambios y garantias
                            </Typography>
                        </Button>


                    </Grid>
                    <Grid item xs={12} sm={6} md={3}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'start',
                        }}
                    >
                        <Button>
                            <Typography variant="body2" className='semiBold' sx={{
                                color: (theme) => theme.palette.primary.dark,
                                fontSize: '0.9rem',
                            }}>
                                Terminos y condiciones
                            </Typography>
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'start',
                        }}
                    >
                        <Button>
                            <Typography variant="body2" className='semiBold' sx={{
                                color: (theme) => theme.palette.primary.dark,
                                fontSize: '0.9rem',
                            }}>
                                Contacto
                            </Typography>
                        </Button>

                    </Grid>
                </Grid>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 4,
                }}>
                    {payments.map((image, index) => {
                        return (
                            <Card key={index} sx={{ margin: '0 1rem' }}>
                                <CardMedia component="img" image={image.imgPath} alt={image.label} sx={{ width: "100px", height: "50px" }} />
                            </Card>
                        );
                    })}
                </Box>

                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mt: 4,
                }}>
                    <Typography variant="body2" className='regular' sx={{
                        color: (theme) => theme.palette.secondary.light,
                        textAlign: 'center',
                        fontSize: '0.75rem',
                        marginBottom: '1rem',
                    }}>
                        © 2023 BunkerPhoneShop - Todos los derechos reservados
                    </Typography>
                </Box>
            </Container>


        </>
    )
}

export default Footer;