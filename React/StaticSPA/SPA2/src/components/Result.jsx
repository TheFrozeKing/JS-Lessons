import styles from "./styles/Result.module.css"

export default function Result({red, green, blue}) {
    const color = `rgb(${red},${green},${blue})`
    return(
        <div className={styles.result} style={{backgroundColor: color}}> </div>
    );
};