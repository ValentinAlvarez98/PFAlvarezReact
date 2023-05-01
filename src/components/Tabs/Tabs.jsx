import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { pedirProductos } from '../../helpers/pedirDatos.js';
import { Grid, Tabs, Tab, Box, } from '@mui/material';
import Item from '../ItemListContainer/Item/Item.jsx';

{ /* Se crea el componente TabPanel, el cual se encarga de mostrar los productos de cada categoría. */ }
function TabPanel(props) {

    { /* Se crean las constantes children, value e index a partir de props */ }
    const { children, value, index, ...other } = props;

    { /* Se retorna el componente TabPanel. */ }
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            { /* Se muestran los productos de cada categoría. */}
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

{ /* Se crea la propType de TabPanel. */ }
TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

{ /* Se crea la constante tabStyles, la cual contiene los estilos de los tabs. */ }
const tabStyles = (theme) => ({
    color: theme.palette.secondary.light,
    fontSize: '0.9rem',
    letterSpacing: '0.02rem',
    textShadow: '0 10px 20px #00000',
});

{ /* Se crea el componente BasicTabs, el cual se encarga de mostrar las categorías de productos. */ }
const BasicTabs = () => {

    { /* Se crean los estados value, productos y categoría. */ }
    const [value, setValue] = useState(0);
    const [productos, setProductos] = useState([]);
    const [categoria, setCategoria] = useState('celulares');

    { /* Se obtienen los productos. */ }
    useEffect(() => {
        const obtenerProductos = async () => {
            const productos = await pedirProductos();
            setProductos(productos);
        };
        obtenerProductos();
    }, []);

    { /* Se crea la constante handleChange, la cual se encarga de cambiar el valor de value y categoría. */ }
    const handleChange = (event, newValue) => {
        setValue(newValue);
        setCategoria(categorias[newValue]);
    };

    { /* Se crea la constante tabs, la cual contiene los labels de las categorías. */ }
    const tabs = [{ label: 'Celulares' }, { label: 'Auriculares' }, { label: 'Cargadores' }, { label: 'Protectores' },];

    { /* Se crea la constante categorias, la cual contiene las categorías. */ }
    const categorias = ['celulares', 'auriculares', 'cargadores', 'protectores'];

    { /* Se crea la constante productosFiltrados, la cual contiene los productos filtrados por categoría. */ }
    const productosFiltrados = productos.filter(
        (producto) => producto.category === categoria
    );

    { /* Se retorna el componente BasicTabs. */ }
    return (
        <>
            <Box sx={{
                borderBottom: 1,
                borderColor: 'divider',
                marginTop: '2.5rem',
            }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    centered
                >
                    {tabs.map((tab, index) => (
                        <Tab key={index} className='semiBold' sx={tabStyles} label={tab.label} />
                    ))}
                </Tabs>
            </Box>

            { /* Se muestran los productos de cada categoría. */}
            {Array.from({
                length: tabs.length
            },
                (_, index) => (
                    <TabPanel
                        value={value}
                        index={index}
                        sx={{ marginTop: '0' }}
                        key={index}>

                        <Grid container spacing={2}>
                            {productosFiltrados.map((producto) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={producto.id}>
                                    <Item item={producto} />
                                </Grid>
                            ))}
                        </Grid>
                    </TabPanel >
                ))}

        </>
    );
};

export default BasicTabs;
