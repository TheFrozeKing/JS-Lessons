import Label from "./Label";
import styles from "./styles/Input.module.css"

export default function Input({label, placeholder, type, color, textColor, onInput}){
    return(
        <div className={styles.inputContainer}>
            <Label text={label} fontSize="14px" color={textColor} fontWeight="600"/>
            <input onChange={onInput} className={styles.input} type={type} placeholder={placeholder} style={ {borderColor: color}  } />
        </div>
    );  
}; 