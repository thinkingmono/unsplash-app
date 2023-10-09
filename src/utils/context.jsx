import { useContext, useState } from "react";
import { createContext } from "react";

/*Context Creation*/
const GlobalContext = createContext();

/*Save darktheme state to local storage*/
const saveLocalStorage = (darkThemeState) => {
    localStorage.setItem('isDarkTheme', darkThemeState);
}

const AppContext = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(localStorage.getItem('isDarkTheme') === "true" ? true : false);
    const [searchValue, setSearchValue] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchValue(e.target.elements.search.value);
    }

    /*Toggle Theme Mode*/
    const toggleDarkTheme = () => {
        setIsDarkTheme((currentThemeMode) => {
            let body = document.getElementsByTagName('body');
            if (currentThemeMode) {
                body[0].className = '';
                saveLocalStorage(false);
                return false;
            }
            if (!currentThemeMode) {
                body[0].className = 'dark-theme';
                saveLocalStorage(true);
                return true;
            }
        })
    }

    /*Check user preferences*/
    const checkUserPreferences = () => {
        if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark').matches){
            setIsDarkTheme(true);
            saveLocalStorage(true);
            console.log('dark');
        }else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light').matches){
            setIsDarkTheme(false);
            saveLocalStorage(false);
            console.log('light');
        }else{
            setIsDarkTheme(false);
            saveLocalStorage(false);
            console.log('Default light');
        }
    }
    return (
        <GlobalContext.Provider value={{ isDarkTheme, toggleDarkTheme, searchValue, handleSubmit, checkUserPreferences}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default AppContext;

/*Custom Hook Creation*/
export const useGlobalContext = () => useContext(GlobalContext);