import styles from "./styles/Label.module.css"

export default function Label({text, fontSize, color, fontWeight, width}) {
    return (
        <h1 className={styles.label} style={ {width:width, fontSize: fontSize, color: color, fontWeight: fontWeight } }>{text}</h1>
    );
};