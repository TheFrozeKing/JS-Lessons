import styles from "./styles/Label.module.css"

export default function Label({text, fontSize, color, fontWeight}) {
    return (
        <h1 className={styles.label} style={ { fontSize: fontSize, color: color, fontWeight: fontWeight } }>{text}</h1>
    );
};