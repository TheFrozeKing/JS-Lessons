import styles from "./styles/ButtonContainer.module.css"

export default function ButtonContainer({children}){
    return (
        <div className={styles.buttonContainer}>
            {children}
        </div>
    );
};