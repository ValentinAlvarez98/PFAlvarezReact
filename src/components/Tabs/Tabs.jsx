import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { pedirProductos } from '../../helpers/pedirDatos.js';
import { Grid, Tabs, Tab, Typography, Box, Button, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Item from '../ItemListContainer/Item/Item.jsx';

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

const tabStyles = (theme) => ({
    color: theme.palette.secondary.light,
    fontSize: '0.9rem',
    letterSpacing: '0.02rem',
    textShadow: '0 10px 20px #00000',
});

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
        setCategoria(categorias[newValue]);
    };

    const tabs = [{ label: 'Celulares' }, { label: 'Auriculares' }, { label: 'Cargadores' }, { label: 'Protectores' },];

    const categorias = ['celulares', 'auriculares', 'cargadores', 'protectores'];

    const productosFiltrados = productos.filter(
        (producto) => producto.category === categoria
    );

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: '2.5rem' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                    {tabs.map((tab, index) => (
                        <Tab key={index} className='semiBold' sx={tabStyles} label={tab.label} />
                    ))}
                </Tabs>
            </Box>
            {Array.from({ length: tabs.length }, (_, index) => (
                <TabPanel value={value} index={index} sx={{ marginTop: '0' }} key={index}>
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
