import styles from "./styles/Input.module.css"

export default function Input({placeholder, type, color, textColor, value, onInput}){
    return(
        <div className={styles.inputContainer}>
            <input onChange={onInput} className={styles.input} value={value} type={type} placeholder={placeholder} style={ {borderColor: color}  } />
        </div>
    );  
}; 