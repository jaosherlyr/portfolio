import { NavLink } from "react-router-dom";
import { IoSunny, IoMoon } from "react-icons/io5";
import { useTheme } from "../context/ThemeContext";

import styles from "./navbar.module.scss";
import LogoLight from "../assets/Logo-light.svg";
import LogoDark from "../assets/Logo-dark.svg";

export default function Navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`${styles.navbar} ${theme === 'dark' ? styles.dark : ''}`}>
            <div className={styles.logo}>
                <img src={theme === 'light' ? LogoLight : LogoDark} alt="Logo" />
                <p>JAO</p>
            </div>

            <div className={styles.tab}>
                <div>
                    <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>Home</NavLink>
                    <NavLink to="/works" className={({ isActive }) => isActive ? styles.active : ''}>Works</NavLink>
                    <a href="#contact">Contact</a>
                </div>
                {theme === 'light' ? (
                    <IoSunny onClick={toggleTheme} className={styles.themeIcon} />
                ) : (
                    <IoMoon onClick={toggleTheme} className={styles.themeIcon} />
                )}

            </div>
        </div>
    )
}