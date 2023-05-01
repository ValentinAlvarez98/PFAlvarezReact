import React, { createContext, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { db } from '../firebase/firebase';

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    const auth = getAuth();

    const login = async (email, password, isRegistering) => {
        try {
            if (isRegistering) {
                await createUserWithEmailAndPassword(auth, email, password);
            } else {
                await signInWithEmailAndPassword(auth, email, password);
                handleLogin();
            }
        } catch (error) {
            console.log(error);
        }
    };

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