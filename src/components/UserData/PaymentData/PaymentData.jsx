import React, { useState } from 'react';
import {
    TextField,
    Button,
    Typography,
    Box,
    Container,
    MenuItem,
} from '@mui/material';

const PaymentData = ({ onSubmit, data }) => {
    const [formData, setFormData] = useState(data || {
        cardNumber: '',
        cardHolderName: '',
        expirationDate: '',
        securityCode: '',
        installments: '',
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
            cardNumber: '',
            cardHolderName: '',
            expirationDate: '',
            securityCode: '',
            installments: '',
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
                    Información de Pago
                </Typography>
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                        value={formData.cardNumber}
                        onChange={handleChange}
                        name="cardNumber"
                        label="Número de tarjeta"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        value={formData.cardHolderName}
                        onChange={handleChange}
                        name="cardHolderName"
                        label="Nombre del titular de la tarjeta"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        value={formData.expirationDate}
                        onChange={handleChange}
                        name="expirationDate"
                        label="Fecha de expedición"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        value={formData.securityCode}
                        onChange={handleChange}
                        name="securityCode"
                        label="Código de seguridad"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    />
                    <TextField
                        select
                        value={formData.installments}
                        onChange={handleChange}
                        name="installments"
                        label="Cuotas"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                    >
                        <MenuItem value={1}>1 cuota</MenuItem>
                        <MenuItem value={3}>3 cuotas</MenuItem>
                        <MenuItem value={6}>6 cuotas</MenuItem>
                        <MenuItem value={10}>10 cuotas</MenuItem>
                        <MenuItem value={12}>12 cuotas</MenuItem>
                    </TextField>
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

export default PaymentData;