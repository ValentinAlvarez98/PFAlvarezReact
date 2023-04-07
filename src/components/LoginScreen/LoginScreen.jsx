import { useState, useContext } from 'react';
import { TextField, Button, Typography, Container, Box } from '@mui/material';
import { db } from '../../firebase/firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { LoginContext } from '../../context/loginContext';

const auth = getAuth();

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);

    const [isLogged, setIsLogged] = useState(false);
    const [isRegister, setIsRegister] = useState(false);

    const { handleLogin } = useContext(LoginContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            if (isRegistering) {
                await createUserWithEmailAndPassword(auth, email, password);
                setIsRegister(true);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                handleLogin();
                setIsLogged(true);
            }
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <Container
            maxWidth="sm"
            sx={{
                marginTop: '4rem',
                boxShadow: '5px 6px 10px 0px #8b9198',
            }}
        >
            <form onSubmit={handleSubmit}
                style={{ paddingTop: '2rem' }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <TextField
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        id="email"
                        type={'email'}
                        placeholder="E-MAIL"
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 2,
                    }}
                >
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        id="password"
                        type={'password'}
                        placeholder="PASSWORD"
                    />
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                        mt: 2,
                    }}
                >
                    <Button
                        type={'submit'}
                        variant="contained"
                        onClick={() => setIsRegistering(!isRegistering)}
                        sx={{
                            borderRadius: "0",
                            background: (theme) => theme.palette.primary.main,
                            "&:hover": {
                                background: (theme) => theme.palette.primary.dark,
                            },
                        }}
                    >
                        <Typography
                            className="regular"
                            sx={{
                                color: (theme) => theme.palette.primary.contrastText,
                                fontSize: "0.8rem",
                            }}
                        >
                            {isRegistering ? "Iniciar sesión" : "Registrarse"}
                        </Typography>
                    </Button>

                </Box>
            </form>
            {isLogged ?
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 2,
                }}>
                    <Typography
                        className="regular"
                        sx={{
                            fontSize: "0.8rem",
                            mb: 2,
                        }}
                    >
                        {isLogged ? "¡Bienvenido!" : ""}
                    </Typography>
                </Box>
                : null}

            {isRegister ?
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 2,
                }}>
                    <Typography
                        className="regular"
                        sx={{
                            fontSize: "0.8rem",
                            mb: 2,
                        }}
                    >
                        {isRegister ? "¡Usuario registrado correctamente!" : ""}
                    </Typography>
                </Box>
                : null}


            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                mt: 2,
            }}>
                <Typography
                    className="regular"
                    onClick={() => setIsRegistering(!isRegistering)}
                    sx={{
                        fontSize: "0.8rem",
                        mb: 2,
                    }}
                >
                    {isRegistering ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}
                </Typography>
            </Box>
        </Container>
    );
}

export default LoginScreen;