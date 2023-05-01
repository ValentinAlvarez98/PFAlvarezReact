import { useState } from 'react';
import { TextField, Button, Typography, Box, Container, MenuItem } from '@mui/material';

const regions = ['Artigas', 'Canelones', 'Cerro Largo', 'Colonia', 'Durazno', 'Flores', 'Florida', 'Lavalleja', 'Maldonado', 'Montevideo', 'Paysandú', 'Río Negro', 'Rivera', 'Rocha', 'Salto', 'San José', 'Soriano', 'Tacuarembó', 'Treinta y Tres'];

const ShippData = ({ onSubmit, data }) => {
    const [formData, setFormData] = useState(data || {
        address: '',
        apartment: '',
        location: '',
        region: '',
        areaCode: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(null, formData);
        setFormData({
            address: '',
            apartment: '',
            location: '',
            region: '',
            areaCode: '',
        });
    };

    return (
        <Container
            maxWidth="sm"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'start',
                alignItems: 'center',
                minHeight: '80vh',
                mb: '8%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '2px',
                    padding: '3rem',
                    boxShadow: "1px 2px 10px 0px #8b9198",
                }}
            >
                <Typography
                    variant="body2"
                    className="semiBold"
                    sx={{
                        color: (theme) => theme.palette.primary.dark,
                        fontSize: '2.2rem',
                        mb: '1.5rem',
                        mt: '1.5rem',
                    }}
                >
                    Datos de envío
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                        select
                        value={formData.region}
                        onChange={handleChange}
                        name="region"
                        id="region"
                        label="Departamento"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    >
                        {regions.map((region) => (
                            <MenuItem key={region} value={region}>
                                {region}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        value={formData.location}
                        onChange={handleChange}
                        name="location"
                        id="location"
                        label="Locación"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        value={formData.address}
                        onChange={handleChange}
                        name="address"
                        id="address"
                        label="Dirección"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        value={formData.areaCode}
                        onChange={handleChange}
                        name="areaCode"
                        id="areaCode"
                        label="Código de postal"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        value={formData.apartment}
                        onChange={handleChange}
                        name="apartment"
                        id="apartment"
                        label="Apartamento"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            width: '30%',
                            ml: '35%',
                        }}
                    >
                        <Button
                            type="submit"
                            variant="contained"
                            className="semiBold"
                            sx={{
                                backgroundColor: (theme) => theme.palette.primary.main,
                                color: '#fff',
                                fontSize: '0.9rem',
                                mt: '1rem',
                                height: '2.75rem',
                            }}
                        >
                            Enviar
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default ShippData;