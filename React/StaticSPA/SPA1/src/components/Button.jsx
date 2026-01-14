import styles from "./styles/Button.module.css"

export default function Button({name, icon,color, clickEvent}) {
    return (
        <button className={styles.button}  style={{backgroundColor: color}} onClick={clickEvent}>
            <img src={icon} alt = 'кнпк'></img>
            {name}
        </button>
    );
};