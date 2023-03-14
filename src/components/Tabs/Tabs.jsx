import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { pedirProductos } from '../../helpers/pedirDatos.js';
import { Grid, Tabs, Tab, Typography, Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeProviderCustom } from '../../theme/Theme.jsx'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

const BasicTabs = () => {
    const [value, setValue] = useState(0);
    const [productos, setProductos] = useState([]);
    const [categoria, setCategoria] = useState('celulares');

    useEffect(() => {
        const obtenerProductos = async () => {
            const productos = await pedirProductos();
            setProductos(productos);
        };
        obtenerProductos();
    }, []);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        switch (newValue) {
            case 0:
                setCategoria('celulares');
                break;
            case 1:
                setCategoria('auriculares');
                break;
            case 2:
                setCategoria('cargadores');
                break;
            case 3:
                setCategoria('protectores');
                break;
            default:
                setCategoria('celulares');
        }
    };

    const productosFiltrados = productos.filter(
        (producto) => producto.category === categoria
    );

    return (
        <ThemeProviderCustom>
            <Box sx={{
                borderBottom: 1,
                borderColor: 'divider',
                marginTop: '2.5rem',
            }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                    centered
                >
                    <Tab className='textoButton' sx={{
                        color: (theme) => theme.palette.secondary.light,
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        letterSpacing: '0.02rem',
                        textShadow: '0 10px 20px #00000',
                    }}
                        label="Celulares" />
                    <Tab className='textoButton' sx={{
                        color: (theme) => theme.palette.secondary.light,
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        letterSpacing: '0.02rem',
                        textShadow: '0 10px 20px #00000',
                    }} label="Auriculares" />
                    <Tab className='textoButton' sx={{
                        color: (theme) => theme.palette.secondary.light,
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        letterSpacing: '0.02rem',
                        textShadow: '0 10px 20px #00000',
                    }} label="Cargadores" />
                    <Tab className='textoButton' sx={{
                        color: (theme) => theme.palette.secondary.light,
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        letterSpacing: '0.02rem',
                        textShadow: '0 10px 20px #00000',
                    }} label="Protectores" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}
                sx={{
                    marginTop: '0',
                }}>
                <Grid container spacing={2}>
                    {productosFiltrados.map((producto) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={producto.id}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginBottom: '1rem',
                                }}
                                key={producto.id}
                            >
                                <img
                                    src={producto.pictureUrl}
                                    alt={producto.name}
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
                                    {producto.name}
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
                                    USD {producto.price}
                                </Typography>
                                <Link to={`/${producto.category}/${producto.id}`}
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
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}
                sx={{
                    marginTop: '0',
                }}>
                <Grid container spacing={2}>
                    {productosFiltrados.map((producto) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={producto.id}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginBottom: '1rem',
                                }}
                                key={producto.id}
                            >
                                <img
                                    src={producto.pictureUrl}
                                    alt={producto.name}
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
                                    {producto.name}
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
                                    USD {producto.price}
                                </Typography>
                                <Link to={`/${producto.category}/${producto.id}`}
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
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={2}
                sx={{
                    marginTop: '0',
                }}>
                <Grid container spacing={2}>
                    {productosFiltrados.map((producto) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={producto.id}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginBottom: '1rem',
                                }}
                                key={producto.id}
                            >
                                <img
                                    src={producto.pictureUrl}
                                    alt={producto.name}
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
                                    {producto.name}
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
                                    USD {producto.price}
                                </Typography>
                                <Link to={`/${producto.category}/${producto.id}`}
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
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}
                sx={{
                    marginTop: '0',
                }}>
                <Grid container spacing={2}>
                    {productosFiltrados.map((producto) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={producto.id}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    marginBottom: '1rem',
                                }}
                                key={producto.id}
                            >
                                <img
                                    src={producto.pictureUrl}
                                    alt={producto.name}
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
                                    {producto.name}
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
                                    USD {producto.price}
                                </Typography>
                                <Link to={`/${producto.category}/${producto.id}`}
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
                        </Grid>
                    ))}
                </Grid>
            </TabPanel>
        </ThemeProviderCustom>
    );
};

export default BasicTabs;
