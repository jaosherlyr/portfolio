import styles from "./Button.module.scss";

export default function Button({ children, onClick, theme }) {
  return (
    <div 
        className={`${styles.btnContainer} ${theme === 'dark' ? styles.dark : ''}`}
        onClick={onClick}    
    >
      {children}
    </div>
  );
}