import { createContext, useContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
    const value = {
        backendURL
    }
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}