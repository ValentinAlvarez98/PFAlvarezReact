import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    return (
        <LoginContext.Provider
            value={{
                isLoggedIn,
                handleLogin,
                handleLogout,
            }}
        >
            {children}
        </LoginContext.Provider>
    );
};

export default LoginProvider;