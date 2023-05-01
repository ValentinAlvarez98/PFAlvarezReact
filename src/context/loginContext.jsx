import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebase/firebase';

{ /* Se crea la constante loginContext, la cual se encarga de crear el contexto del login. */ }
export const LoginContext = createContext();

{ /* Se crea el componente LoginProvider, el cual se encarga de proveer el contexto del login. */ }
const LoginProvider = ({ children }) => {

    { /* Se crea el estado isLoggedIn, el cual se encarga de almacenar si el usuario está autenticado. */ }
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    { /* Se crea la función handleLogin, la cual se encarga de cambiar el estado isLoggedIn a true. */ }
    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    { /* Se crea la función handleLogout, la cual se encarga de cambiar el estado isLoggedIn a false. */ }
    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    { /* Se crea la constante auth, la cual se encarga de obtener la autenticación de Firebase. */ }
    const auth = getAuth();

    { /* Se crea la función login, la cual se encarga de autenticar al usuario. */ }
    const login = async (email, password, isRegistering) => {
        try {

            { /* Se verifica si el usuario está registrando. */ }
            if (isRegistering) {

                { /* Se crea el usuario en Firebase. */ }
                await
                    createUserWithEmailAndPassword(auth, email, password);
            } else {

                { /* Se inicia sesión en Firebase. */ }
                await
                    signInWithEmailAndPassword(auth, email, password);
                handleLogin();
            }
        } catch (error) {
            console.log(error);
        }
    };

    { /* Se retorna el contexto del login. */ }
    return (
        <LoginContext.Provider
            value={{
                isLoggedIn,
                login,
                handleLogout,
                auth,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;