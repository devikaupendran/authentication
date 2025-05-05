import { createContext, useContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const value = {

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