import { FaMoon, FaSun } from "react-icons/fa";
import { useGlobalContext } from "../utils/context"


const ThemeToggle = () => {
    const { isDarkTheme, toggleDarkTheme } = useGlobalContext();
    return (
        <section className="toggle-container">
            <button type="button" onClick={toggleDarkTheme} className="dark-toggle">{isDarkTheme ? <FaSun className="toggle-icon"/> : <FaMoon className="toggle-icon"/>}</button>
        </section>
    )
}

export default ThemeToggle