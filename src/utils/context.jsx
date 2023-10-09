import { createContext, useContext, useState, useEffect } from "react";

/*Context Creation*/
const GlobalContext = createContext();

/*Check user preferences*/
const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storesDarkMode = localStorage.getItem('isDarkTheme') === "true";
    return storesDarkMode || prefersDarkMode;
}

/*Save darktheme state to local storage*/
const saveLocalStorage = (darkThemeState) => {
    localStorage.setItem('isDarkTheme', darkThemeState);
}

const AppContext = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());
    const [searchValue, setSearchValue] = useState('dev');

    /*Toggle Theme Mode*/
    const toggleDarkTheme = () => {
        const newDarkTheme = !isDarkTheme;
        setIsDarkTheme(newDarkTheme);
        saveLocalStorage(newDarkTheme);
        /*Another approach to toggle dark-theme body class*/
        // const body = document.querySelector('body');
        // body.classList.toggle('dark-theme', newDarkTheme);
    }

    useEffect(() => {
        /*Approach toggle dark-theme body class using useEffect and every time isDarkTheme state changes*/
        document.body.classList.toggle('dark-theme', isDarkTheme);
    }, [isDarkTheme])

    return (
        <GlobalContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchValue, setSearchValue }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext;

/*Custom Hook Creation*/
export const useGlobalContext = () => useContext(GlobalContext);