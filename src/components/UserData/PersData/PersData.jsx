import React, { useState } from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';

const PersData = ({ onSubmit, data }) => {

    const [formData, setFormData] = useState(data || {
        name: '',
        lastName: '',
        identification: '',
        cellphone: '',
        phone: '',
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
        onSubmit(formData, null);
        setFormData({
            name: '',
            lastName: '',
            identification: '',
            cellphone: '',
            phone: '',
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
                mt: '4%',
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
                    boxShadow: '1px 2px 10px 0px #8b9198',
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
                    Datos personales
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        label="Nombre"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        value={formData.lastName}
                        onChange={handleChange}
                        name="lastName"
                        label="Apellido"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        value={formData.identification}
                        onChange={handleChange}
                        name="identification"
                        label="C.I."
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        value={formData.cellphone}
                        onChange={handleChange}
                        name="cellphone"
                        label="Celular"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        value={formData.phone}
                        onChange={handleChange}
                        name="phone"
                        label="Teléfono"
                        variant="outlined"
                        fullWidth
                        margin="normal"
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

export default PersData