import { Link } from "react-router-dom";
import { IoSunny } from "react-icons/io5";
import { useTheme } from "../context/themeContext";

import styles from "./navbar.module.scss";

function navbar() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`${styles.navbar} ${theme === 'dark' ? styles.dark : ''}`}>
            <div>
                <h2>Logo</h2>
            </div>

            <div className={styles.tab}>
                <div>
                    <Link to={"/"}>Home</Link>
                    <Link to={"/works"}>Works</Link>
                    <Link to={"/"}>Contact</Link>
                </div>
                <IoSunny onClick={toggleTheme} className={styles.themeIcon} />
            </div>
        </div>
    )
}

export default navbar