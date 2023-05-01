import { useState, useContext } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { LoginContext } from '../../context/loginContext';
import { Flipper, Flipped } from 'react-flip-toolkit';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    const { login } = useContext(LoginContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password, isRegistering);
    };

    const handleToggleRegister = () => {
        setIsRegistering(!isRegistering);
    };

    return (
        <Container
            maxWidth="md"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
            }}
        >
            <Flipper flipKey={isRegistering} stagger={10}>
                <Flipped flipId="box">
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '2px',
                            padding: '2.5rem',
                            boxShadow: "5px 6px 10px 0px #8b9198",
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
                            {isRegistering ? "Regístrate" : "Inicia sesión"}
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                label="Email"
                                variant="outlined"
                                type="email"
                                fullWidth
                                sx={{ mb: '1.5rem' }}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <TextField
                                value={password}
                                className='regular'
                                onChange={(e) => setPassword(e.target.value)}
                                id="password"
                                type={'password'}
                                label="Contraseña"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                required
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                className='semiBold'
                                fullWidth
                                sx={{
                                    backgroundColor: (theme) => theme.palette.primary.main,
                                    color: '#fff',
                                    mt: '2rem',
                                    mb: '1rem',
                                    pt: '0.5rem',
                                    '&:hover': {
                                        backgroundColor: (theme) => theme.palette.secondary.main,
                                    }
                                }}
                            >
                                {isRegistering ? "Registrarse" : "Iniciar sesión"}
                            </Button>
                        </form>
                        <Typography
                            variant="body1"
                            className='regular'
                            sx={{
                                color: (theme) => theme.palette.secondary.light,
                            }}
                        >
                            {isRegistering ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}{" "}
                            <Typography
                                variant="body1"
                                component="span"
                                className='regular'
                                sx={{
                                    color: (theme) => theme.palette.info.main,
                                    fontWeight: 'bold',
                                    cursor: 'pointer',
                                }}
                                onClick={handleToggleRegister}
                            >
                                {isRegistering ? "Inicia sesión" : "Regístrate"}
                            </Typography>
                        </Typography>

                    </Box>
                </Flipped>
            </Flipper>
        </Container>
    );
};

export default LoginScreen;