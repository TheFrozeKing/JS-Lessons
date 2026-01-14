import styles from "./styles/Footer.module.css"
import Label from "./Label"

export default function Footer({title}) {
    return (
        <div className={styles.footer}>
            <Label text={title} fontSize="15px" color="#505050"/>
        </div>
    );
}