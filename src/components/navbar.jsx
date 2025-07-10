import { Link } from "react-router-dom";
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
            </div>
        </div>
    )
}

export default navbar