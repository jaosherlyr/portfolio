import Button from "./Button.jsx";
import styles from "./Details.module.scss";

import { useTheme } from "../context/ThemeContext.jsx";
import { IoArrowForwardOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function Details() {
    const { theme } = useTheme();
    const navigate = useNavigate();

    const onButtonClick = () => {
        navigate('/works');
    }

    return (
        <div className={styles.details}>
            <span className={styles.title}>Hi! I am <span className={`${styles.name} whitespace-nowrap`}>Sherly R. Jao</span></span>
            <span className={`${styles.subtitle} ${theme === 'dark' ? styles.dark : ''}`}>Artist | Web Developer & Designer</span>

            <p>
            I code and I draw, and I'm from the <strong>Philippines 🇵🇭</strong> <br/>
            Just trying my best to navigate life with the skills I have.
            </p>

            <Button theme={theme} onClick={onButtonClick}>
            <IoArrowForwardOutline />
            Check out my works!
            </Button>
      </div>
    );
}