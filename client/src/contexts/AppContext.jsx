import { createContext, useContext, useState } from "react";
import axios from 'axios'

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const value = {
        backendURL,
        isAuthenticated,
        setIsAuthenticated
    };
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}