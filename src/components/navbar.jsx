import { Link } from "react-router-dom";
import { IoSunny } from "react-icons/io5";

import styles from "./navbar.module.css";

function navbar() {

    return (
        <div className={styles.navbar}>
            <div>
                <h2>Logo</h2>
            </div>

            <div>
                <Link to={"/"}>Home</Link>
                <Link to={"/works"}>Works</Link>
                <Link to={"/"}>Contact</Link>
                <IoSunny />
            </div>
        </div>
    )
}

export default navbar