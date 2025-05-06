import { createContext, useContext, useState, useEffect } from "react";
import axios from 'axios'

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axios.get(`${backendURL}/api/user/me`, {
                    withCredentials: true,
                });

                setUser(res.data.user);
                setIsAuthenticated(true);

            }
            catch (error) {
                setIsAuthenticated(false);
                setUser(null);
            } 
            finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, [backendURL]);


    const value = {
        backendURL,
        isAuthenticated,
        setIsAuthenticated,
        loading
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