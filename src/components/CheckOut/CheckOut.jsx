import React, { useState, useContext, useEffect } from 'react';
import {
    TextField,
    Button,
    Typography,
    Box,
    Container,
    MenuItem,
} from '@mui/material';
import { db } from '../../firebase/firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { LoginContext } from '../../context/loginContext';


{/* Se crea el componente CheckOut, el cual se encarga de mostrar el formulario de pago y de guardar la orden en la base de datos. */ }
const CheckOut = () => {

    {/* Se obtiene el usuario logueado. */ }
    const { auth } = useContext(LoginContext);

    {/* Se crean los estados para guardar los datos del usuario, los datos de envío, el carrito y los datos de pago. */ }
    const [persData, setPersData] = useState(null);
    const [shippData, setShippData] = useState(null);
    const [cart, setCart] = useState(null);

    const [cardNumber, setCardNumber] = useState("");
    const [cardHolderName, setCardHolderName] = useState("");
    const [cardExpirationDate, setCardExpirationDate] = useState("");
    const [cardSecurityCode, setCardSecurityCode] = useState("");
    const [cardInstallments, setCardInstallments] = useState("");

    {/* Se obtienen los datos del usuario, los datos de envío y el carrito de la base de datos. */ }
    useEffect(() => {
        const userId = auth.currentUser.uid;
        const userDocRef = doc(db, 'users', userId);
        getDoc(userDocRef).then((doc) => {
            if (doc.exists()) {
                setPersData(doc.data().persData);
                setShippData(doc.data().shippData);
            }
        });
    }, []);


    useEffect(() => {
        const userId = auth.currentUser.uid;
        const userDocRef = doc(db, 'cart', userId);
        getDoc(userDocRef).then((doc) => {
            if (doc.exists()) {
                setCart(doc.data());
            }
        });
    }, []);


    {/* Se crea la función handleSubmit, la cual se encarga de guardar la orden en la base de datos. */ }
    const handleSubmit = (e) => {

        e.preventDefault();

        {/* Se crea el objeto order, el cual contiene los datos del usuario, los datos de envío, el carrito, el número de orden y el total de la orden. */ }
        const order = {
            PersData: {
                name: persData.name,
                lastName: persData.lastName,
                identification: persData.identification,
                cellphone: persData.cellphone,
                phone: persData.phone,
            },

            ShippData: {
                address: shippData.address,
                apartment: shippData.apartment,
                location: shippData.location,
                region: shippData.region,
                areaCode: shippData.areaCode,
            },

            PaymentData: {
                cardNumber: cardNumber,
                cardHolderName: cardHolderName,
                cardExpirationDate: cardExpirationDate,
                cardSecurityCode: cardSecurityCode,
                cardInstallments: cardInstallments,
            },

            Cart: cart.cartItems,
            OrderNumber: Math.floor(Math.random() * 1000000000),
            TotalOrder: cart.totalPrice,


        };

        {/* Se guarda el objeto order en la base de datos. */ }
        const userId = auth.currentUser.uid;
        const userDocRef = doc(db, 'orders', userId);

        setDoc(userDocRef, order)

    };

    {/* Se retorna el formulario de pago. */ }
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
                        value={cardNumber}
                        name="cardNumber"
                        label="Número de tarjeta"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                    <TextField
                        value={cardHolderName}
                        name="cardHolderName"
                        label="Nombre del titular de la tarjeta"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        onChange={(e) => setCardHolderName(e.target.value)}
                    />
                    <TextField
                        value={cardExpirationDate}
                        name="expirationDate"
                        label="Fecha de expedición"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        onChange={(e) => setCardExpirationDate(e.target.value)}
                    />
                    <TextField
                        value={cardSecurityCode}
                        name="securityCode"
                        label="Código de seguridad"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        onChange={(e) => setCardSecurityCode(e.target.value)}
                    />
                    <TextField
                        select
                        value={cardInstallments}
                        name="installments"
                        label="Cuotas"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        required
                        onChange={(e) => setCardInstallments(e.target.value)}
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
                            Pagar
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default CheckOut;