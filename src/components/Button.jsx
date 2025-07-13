import styles from "./Button.module.scss";

export default function Button({ children, theme }) {

    return (
        <div className={`${styles.btnContainer} ${theme === 'light' ? 'light' : ''}`}>
            {children}
        </div>
    );
}