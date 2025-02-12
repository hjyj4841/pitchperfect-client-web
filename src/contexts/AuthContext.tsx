import React, { createContext, useState, useContext } from "react";
import { Auth } from "../types";

const AuthContext = createContext<Auth>({
    token: null,
    login: () => {},
    logout: () => {}
});

export const AuthProvider = ({children}) => {

    const [token, setToken] = useState(localStorage.getItem('token'));

    const login = (data: string) => {
        localStorage.setItem('token', data);
        setToken(data);
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        window.location.href = "/";
    }

    return (
        <AuthContext.Provider value={{token, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);