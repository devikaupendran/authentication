import { createContext, useContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const backendURL = import.meta.env.VITE_BACKEND_URL
    const value = {
        backendURL
    }
    return (
        <AppContextProvider value={value}>
            {children}
        </AppContextProvider>
    )
}

export const useAppContext = () => {
    return useContext(AppContext);
}